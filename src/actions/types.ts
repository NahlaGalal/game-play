import { ISignup, ILogin } from "../storeTypes";

export enum actionTypes {
  SIGNUP_USER_SAGA = "SIGNUP_USER_SAGA",
  SIGNUP_USER = "SIGNUP_USER",
  LOGIN_USER_SAGA = "LOGIN_USER_SAGA",
  LOGIN_USER = "LOGIN_USER",
}

export interface SignupAction {
  type: typeof actionTypes.SIGNUP_USER;
  data: ISignup;
}

export interface loginAction {
  type: typeof actionTypes.LOGIN_USER;
  data: ILogin;
}
