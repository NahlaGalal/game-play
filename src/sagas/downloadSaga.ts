import { takeEvery, put, call, all } from "redux-saga/effects";
import axios from "axios";
import {
  actionTypes,
  IPostAddToDownloads,
  IGetDownloads,
} from "../actions/types";

function* postAddToDownloads({ data: { token, gameId } }: IPostAddToDownloads) {
  try {
    const res = yield call(() =>
      axios.post(
        "http://localhost:4000/download",
        { gameId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );
    if (!res.isFailed) {
      yield put({
        type: actionTypes.POST_ADD_TO_DOWNLOADS,
        payload: res.data.data,
        isFailed: false,
      });
    } else {
      yield put({
        type: actionTypes.POST_ADD_TO_DOWNLOADS,
        payload: res.data.errors,
        isFailed: false,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

function* getDownloads({ data }: IGetDownloads) {
  try {
    const res = yield call(() =>
      axios.get("http://localhost:4000/download", {
        headers: {
          Authorization: `Bearer ${data}`,
        },
      })
    );

    let games: {
      id: number;
      name: string;
      description: string;
      image: string;
    }[] = yield all(
      res.data.data.map(async (id: number) => {
        const res = await axios.get(
          `https://rawg-video-games-database.p.rapidapi.com/games/${id}`,
          {
            headers: {
              "x-rapidapi-key":
                "0428eeeac2msh8952e9ad505f55bp10a66ajsnbda9c2e4d43e",
              "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
              useQueryString: true,
            },
          }
        );

        return {
          id: res.data.id,
          name: res.data.name,
          description: res.data.description,
          image: res.data.background_image,
        };
      })
    );

    if (!res.isFailed) {
      yield put({
        type: actionTypes.GET_DOWNLOADS,
        payload: games,
        isFailed: false,
      });
    } else {
      yield put({
        type: actionTypes.GET_DOWNLOADS,
        payload: res.data.errors,
        isFailed: false,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

function* deleteFromDownloads({
  data: { token, gameId },
}: IPostAddToDownloads) {
  try {
    const res = yield call(() =>
      axios.delete(`http://localhost:4000/download?gameId=${gameId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    );

    if (!res.isFailed) {
      yield put({
        type: actionTypes.GET_DOWNLOADS_SAGA,
        data: token,
      });
    } else {
      yield put({
        type: actionTypes.DELETE_FROM_DOWNLOADS,
        payload: res.data.errors,
        isFailed: false,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

export default function* watchDownloadGames() {
  yield takeEvery(actionTypes.POST_ADD_TO_DOWNLOADS_SAGA, postAddToDownloads);
  yield takeEvery(actionTypes.GET_DOWNLOADS_SAGA, getDownloads);
  yield takeEvery(actionTypes.DELETE_FROM_DOWNLOADS_SAGA, deleteFromDownloads);
}
