import { createStore, applyMiddleware, compose } from "redux";
import createLogger from "redux-logger";
import createSaga from "redux-saga";
import cookie from "react-cookies";
import rootSaga from "./sagas";
import reducer from "./reducers";
import { ICredentials, IGamesAPI } from "./storeTypes";

export interface Istore {
  credentials: ICredentials;
  gamesAPI: IGamesAPI;
}

export const loadState = (): { name: string; token: string, image: string } =>
  cookie.load("gamePlay")
    ? cookie.load("gamePlay")
    : {
        name: "",
        token: "",
        image: ""
      };

export const saveState = (state: Istore): void => {
  cookie.save(
    "gamePlay",
    {
      name: state.credentials.name,
      token: state.credentials.token,
      image: state.credentials.image
    },
    { path: "/" }
  );
};

export const defaultStore: Istore = {
  credentials: {
    name: loadState().name,
    token: loadState().token,
    image: loadState().image,
    success: "",
    errors: "",
  },
  gamesAPI: {
    games: {
      mobileGames: [],
      pcGames: [],
      mostDownloadedGames: [],
      suggestions: [],
    },
    categories: [],
    errors: "",
  },
};

const configureStore = () => {
  const componseEnhancers = compose;
  const sagaMiddleware = createSaga();
  const middlewares: any[] = [sagaMiddleware];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger);
  }
  const store = createStore(
    reducer,
    defaultStore as any,
    componseEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
