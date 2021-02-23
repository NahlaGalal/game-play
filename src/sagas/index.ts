import { all } from "redux-saga/effects";
import watchGetGames from "./gameSaga";
import watchRegisterUser from "./userSaga";
import watchDownloadGames from "./downloadSaga";

export default function* rootSaga() {
  yield all([watchRegisterUser(), watchGetGames(), watchDownloadGames()]);
}
