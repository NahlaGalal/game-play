import { all } from "redux-saga/effects";
import watchRegisterUser from "./userSaga";

export default function* rootSaga() {
  yield all([watchRegisterUser()]);
}
