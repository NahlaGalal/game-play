import { combineReducers } from "redux";
import { actionTypes } from "../actions/types";
import { ICredentials, IDownloads, IGamesAPI } from "../storeTypes";

interface actionReducer {
  type: string;
  payload: any;
  isFailed: boolean;
}

const credentials = (state: ICredentials, action: actionReducer) => {
  switch (action.type) {
    case actionTypes.SIGNUP_USER:
      return {
        ...state,
        success: action.isFailed ? state.success : action.payload.success,
        errors: !action.isFailed ? state.errors : action.payload.message,
      };
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        name: action.isFailed ? state.name : action.payload.name,
        image: action.isFailed
          ? state.image
          : `http://localhost:4000/${action.payload.image}`,
        token: action.isFailed ? state.token : action.payload.token,
        errors: !action.isFailed ? state.errors : action.payload.message,
      };
    default:
      return { ...state };
  }
};

const gamesAPI = (state: IGamesAPI, action: actionReducer) => {
  switch (action.type) {
    case actionTypes.GET_ALL_GAMES:
      return {
        ...state,
        games: action.isFailed ? state.games : action.payload.games,
        categories: action.isFailed
          ? state.categories
          : action.payload.categories,
        errors: !action.isFailed ? state.errors : action.payload.message,
      };
    case actionTypes.GET_CATEGORY_GAMES:
      return {
        ...state,
        categoryGames: action.isFailed
          ? state.categoryGames
          : action.payload.games,
        categories: action.isFailed
          ? state.categories
          : action.payload.categories,
        errors: !action.isFailed ? state.errors : action.payload.message,
      };
    case actionTypes.GET_GAME_DETAILS:
      return {
        ...state,
        gameDetails: action.isFailed ? state.gameDetails : action.payload,
        errors: !action.isFailed ? state.errors : action.payload.message,
      };
    default:
      return { ...state };
  }
};

const downloads = (state: IDownloads, action: actionReducer) => {
  switch (action.type) {
    case actionTypes.POST_ADD_TO_DOWNLOADS:
      return {
        ...state,
        success: action.isFailed ? state.success : action.payload.success,
        errors: !action.isFailed ? state.errors : action.payload.message,
      };
    case actionTypes.GET_DOWNLOADS:
      return {
        ...state,
        downloads: action.isFailed ? state.downloads : [...action.payload],
        errors: !action.isFailed ? state.errors : action.payload.message,
      };
    case actionTypes.DELETE_FROM_DOWNLOADS:
      return {
        ...state,
        errors: !action.isFailed ? state.errors : action.payload.message,
      };
    default:
      return { ...state };
  }
};

export default combineReducers({ credentials, gamesAPI, downloads });
