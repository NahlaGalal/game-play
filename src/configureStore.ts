import { createStore, applyMiddleware, compose } from "redux";
import createLogger from "redux-logger";
import createSaga from "redux-saga";
import rootSaga from "./sagas";
import reducer from "./reducers";
import { ICredentials } from "./storeTypes";

export interface Istore {
  credentials: ICredentials;
}

export const defaultStore: Istore = {
  credentials: {
    name: "",
    token: "",
    image: "",
    success: "",
    errors: "",
  },
};

export const saveState = (s: any): void => {};

const configureStore = () => {
  const componseEnhancers = compose;
  const sagaMiddleware = createSaga();
  const middlewares: any[] = [sagaMiddleware];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger);
  }
  const store = createStore(
    reducer,
    undefined,
    componseEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
