import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { actionTypes } from "../actions/types";

const getGamesHelper = (query?: string) =>
  axios.get(
    `https://rawg-video-games-database.p.rapidapi.com/games?page_size=8${query}`,
    {
      headers: {
        "x-rapidapi-key": "0428eeeac2msh8952e9ad505f55bp10a66ajsnbda9c2e4d43e",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        useQueryString: true,
      },
    }
  );

function* getGames() {
  try {
    const mobileGames = yield call(() =>
      getGamesHelper("&parent_platforms=8,9&ordering=-rating")
    );
    const pcGames = yield call(() =>
      getGamesHelper("&parent_platforms=1&ordering=-rating")
    );
    const mostDownloadedGames = yield call(() =>
      getGamesHelper("&ordering=-rating")
    );
    const suggestions = yield call(() => getGamesHelper(""));
    const categories = yield call(() =>
      axios.get(`https://rawg-video-games-database.p.rapidapi.com/genres`, {
        headers: {
          "x-rapidapi-key":
            "0428eeeac2msh8952e9ad505f55bp10a66ajsnbda9c2e4d43e",
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
          useQueryString: true,
        },
      })
    );
    const games = {
      mobileGames: mobileGames.data.results.map((game: any) => ({
        id: game.id,
        name: game.name,
        color: game.dominant_color,
        rating: game.rating,
        image: game.background_image,
      })),
      pcGames: pcGames.data.results.map((game: any) => ({
        id: game.id,
        name: game.name,
        color: game.dominant_color,
        rating: game.rating,
        image: game.background_image,
      })),
      mostDownloadedGames: mostDownloadedGames.data.results.map(
        (game: any) => ({
          id: game.id,
          name: game.name,
          color: game.dominant_color,
          rating: game.rating,
          image: game.background_image,
        })
      ),
      suggestions: suggestions.data.results.map((game: any) => ({
        id: game.id,
        name: game.name,
        color: game.dominant_color,
        rating: game.rating,
        image: game.background_image,
      })),
    };
    const returnedCategories = categories.data.results.map((game: any) => ({
      id: game.id,
      name: game.name,
      image: game.image_background,
    }));
    yield put({
      type: actionTypes.GET_ALL_GAMES,
      payload: { games, categories: returnedCategories },
      isFailed: false,
    });
  } catch (err) {
    console.log(err);
  }
}

export default function* watchGetGames() {
  yield takeEvery(actionTypes.GET_ALL_GAMES_SAGA, getGames);
}
