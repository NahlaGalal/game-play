import {createStore, applyMiddleware, compose} from "redux";
import createLogger from "redux-logger";
import createSaga from "redux-saga";
import rootSaga from "./sagas";
import reducer from "./reducers";

export interface Istore {
    credentials: {
        email: string;
        password: string
    }
}

const defaultStore: Istore = {
    credentials: {
        email: "",
        password: ""
    }
}

export const saveState = (s: any): void => {

}

const configureStore = () => {
    const componseEnhancers = compose;
    const sagaMiddleware = createSaga();
    const middlewares: any[]= [sagaMiddleware];
    if(process.env.NODE_ENV !== "production") {
        middlewares.push(createLogger);
    }
    const store = createStore(reducer, defaultStore, componseEnhancers(applyMiddleware(...middlewares)));
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;