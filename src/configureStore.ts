import { createStore, applyMiddleware, compose } from "redux";
import createLogger from "redux-logger";
import createSaga from "redux-saga";
import cookie from "react-cookies";
import rootSaga from "./sagas";
import reducer from "./reducers";
import { ICredentials, IDownloads, IGamesAPI } from "./storeTypes";

export interface Istore {
  credentials: ICredentials;
  gamesAPI: IGamesAPI;
  downloads: IDownloads;
}

export const loadState = (): { name: string; token: string; image: string } =>
  cookie.load("gamePlay")
    ? cookie.load("gamePlay")
    : {
        name: "",
        token: "",
        image: "",
      };

export const saveState = (state: Istore): void => {
  cookie.save(
    "gamePlay",
    {
      name: state.credentials.name,
      token: state.credentials.token,
      image: state.credentials.image,
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
    categoryGames: {
      name: "",
      id: -1,
      games: [],
      suggestions: [],
    },
    gameDetails: {
      id: -1,
      name: "",
      description: "",
      rating: -1,
      image: "",
      addImage: "",
      color: "",
      tags: [],
      suggestions: [],
      movie: {
        id: -1,
        name: "",
        preview: "",
        video: "",
      },
    },
    errors: "",
  },
  downloads: {
    downloads: [],
    success: false,
    errors: "",
    empty: false,
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
