import { put, takeEvery, call } from "redux-saga/effects";
import { actionTypes, loginAction, SignupAction } from "../actions/types";
import axios from "axios";

function* signupUser({ data }: SignupAction) {
  try {
    const formData = new FormData();
    if (data.userImage) formData.append("userImage", data.userImage);
    formData.append("fName", data.fName);
    formData.append("lName", data.lName);
    formData.append("email", data.email);
    formData.append("password", data.password);

    const res = yield call(() =>
      axios.post("http://localhost:4000/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
    );
    if (!res.data.isFailed) {
      yield put({
        type: actionTypes.SIGNUP_USER,
        payload: res.data.data,
        isFailed: false,
      });
    } else {
      yield put({
        type: actionTypes.SIGNUP_USER,
        payload: res.data.errors,
        isFailed: true,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

function* loginUser({ data }: loginAction) {
  try {
    const res = yield call(() =>
      axios.post("http://localhost:4000/login", { ...data })
    );
    if (!res.data.isFailed)
      yield put({
        type: actionTypes.LOGIN_USER,
        payload: res.data.data,
        isFailed: false,
      });
    else
      yield put({
        type: actionTypes.LOGIN_USER,
        payload: res.data.errors,
        isFailed: true,
      });
  } catch (err) {
    console.log(err);
  }
}

export default function* watchRegisterUser() {
  yield takeEvery(actionTypes.SIGNUP_USER_SAGA, signupUser);
  yield takeEvery(actionTypes.LOGIN_USER_SAGA, loginUser);
}
