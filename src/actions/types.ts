import { ISignup, ILogin } from "../storeTypes";

export enum actionTypes {
  SIGNUP_USER_SAGA = "SIGNUP_USER_SAGA",
  SIGNUP_USER = "SIGNUP_USER",
  LOGIN_USER_SAGA = "LOGIN_USER_SAGA",
  LOGIN_USER = "LOGIN_USER",
  GET_ALL_GAMES_SAGA = "GET_ALL_GAMES_SAGA",
  GET_ALL_GAMES = "GET_ALL_GAMES",
  GET_CATEGORY_GAMES_SAGA = "GET_CATEGORY_GAMES_SAGA",
  GET_CATEGORY_GAMES = "GET_CATEGORY_GAMES"
}

export interface SignupAction {
  type: typeof actionTypes.SIGNUP_USER;
  data: ISignup;
}

export interface loginAction {
  type: typeof actionTypes.LOGIN_USER;
  data: ILogin;
}

export interface getAllGamesAction {
  type: typeof actionTypes.GET_ALL_GAMES;
}

export interface getCategoryGamesAction {
  type: typeof actionTypes.GET_CATEGORY_GAMES,
  data: number
}

