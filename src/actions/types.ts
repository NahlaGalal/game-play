import { ISignup, ILogin } from "../storeTypes";

export enum actionTypes {
  SIGNUP_USER_SAGA = "SIGNUP_USER_SAGA",
  SIGNUP_USER = "SIGNUP_USER",
  LOGIN_USER_SAGA = "LOGIN_USER_SAGA",
  LOGIN_USER = "LOGIN_USER",
  GET_ALL_GAMES_SAGA = "GET_ALL_GAMES_SAGA",
  GET_ALL_GAMES = "GET_ALL_GAMES",
  GET_CATEGORY_GAMES_SAGA = "GET_CATEGORY_GAMES_SAGA",
  GET_CATEGORY_GAMES = "GET_CATEGORY_GAMES",
  GET_GAME_DETAILS_SAGA = "GET_GAME_DETAILS_SAGA",
  GET_GAME_DETAILS = "GET_GAME_DETAILS",
  POST_ADD_TO_DOWNLOADS_SAGA = "POST_ADD_TO_DOWNLOADS_SAGA",
  POST_ADD_TO_DOWNLOADS = "POST_ADD_TO_DOWNLOADS",
  GET_DOWNLOADS_SAGA = "GET_DOWNLOADS_SAGA",
  GET_DOWNLOADS = "GET_DOWNLOADS",
  DELETE_FROM_DOWNLOADS_SAGA = "DELETE_FROM_DOWNLOADS_SAGA",
  DELETE_FROM_DOWNLOADS = "DELETE_FROM_DOWNLOADS",
}

export interface SignupAction {
  type: typeof actionTypes.SIGNUP_USER_SAGA;
  data: ISignup;
}

export interface loginAction {
  type: typeof actionTypes.LOGIN_USER_SAGA;
  data: ILogin;
}

export interface getAllGamesAction {
  type: typeof actionTypes.GET_ALL_GAMES_SAGA;
}

export interface getCategoryGamesAction {
  type: typeof actionTypes.GET_CATEGORY_GAMES_SAGA;
  data: number;
}

export interface getGameDetailsAction {
  type: typeof actionTypes.GET_GAME_DETAILS_SAGA;
  data: number;
}

export interface IPostAddToDownloads {
  type: typeof actionTypes.POST_ADD_TO_DOWNLOADS_SAGA;
  data: {
    gameId: number;
    token: string;
  };
}

export interface IGetDownloads {
  type: typeof actionTypes.GET_DOWNLOADS_SAGA;
  data: string;
}
