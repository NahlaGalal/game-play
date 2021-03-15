import { put, call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  actionTypes,
  getCategoryGamesAction,
  getGameDetailsAction,
} from "../actions/types";
import { ICategoryGames, IGames } from "../storeTypes";

const getGamesHelper = (query?: string) =>
  axios.get(`https://rawg-video-games-database.p.rapidapi.com/games?${query}`, {
    headers: {
      "x-rapidapi-key": "0428eeeac2msh8952e9ad505f55bp10a66ajsnbda9c2e4d43e",
      "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
      useQueryString: true,
    },
  });

function* getGames() {
  try {
    const mobileGames = yield call(() =>
      getGamesHelper("page_size=8&parent_platforms=8,9&ordering=-rating")
    );
    const pcGames = yield call(() =>
      getGamesHelper("page_size=8&parent_platforms=1&ordering=-rating")
    );
    const mostDownloadedGames = yield call(() =>
      getGamesHelper("page_size=8&ordering=-rating")
    );
    const suggestions = yield call(() => getGamesHelper("page_size=8"));
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
    const games: IGames = {
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

function* getCategoryGames({ data }: getCategoryGamesAction) {
  try {
    const categoryName = yield call(() =>
      axios.get(
        `https://rawg-video-games-database.p.rapidapi.com/genres/${data}`,
        {
          headers: {
            "x-rapidapi-key":
              "0428eeeac2msh8952e9ad505f55bp10a66ajsnbda9c2e4d43e",
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            useQueryString: true,
          },
        }
      )
    );
    const categoryGames = yield call(() =>
      getGamesHelper(`page_size=36&genres=${data}&ordering=-rating`)
    );
    const suggestions = yield call(() => getGamesHelper("page_size=8"));
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
    const games: ICategoryGames = {
      name: categoryName.data.name,
      id: categoryName.data.id,
      games: categoryGames.data.results.map((game: any) => ({
        id: game.id,
        name: game.name,
        color: game.dominant_color,
        rating: game.rating,
        image: game.background_image,
      })),
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
      type: actionTypes.GET_CATEGORY_GAMES,
      payload: { games, categories: returnedCategories },
      isFailed: false,
    });
  } catch (err) {
    console.log(err);
  }
}

function* getGameDetails({ data }: getGameDetailsAction) {
  try {
    const game = yield call(() =>
      axios.get(
        `https://rawg-video-games-database.p.rapidapi.com/games/${data}`,
        {
          headers: {
            "x-rapidapi-key":
              "0428eeeac2msh8952e9ad505f55bp10a66ajsnbda9c2e4d43e",
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            useQueryString: true,
          },
        }
      )
    );
    const suggestions = yield call(() =>
      axios.get(
        `https://rawg-video-games-database.p.rapidapi.com/games/${data}/suggested?page_size=4`,
        {
          headers: {
            "x-rapidapi-key":
              "0428eeeac2msh8952e9ad505f55bp10a66ajsnbda9c2e4d43e",
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            useQueryString: true,
          },
        }
      )
    );
    const movieGame = yield call(() =>
      axios.get(
        `https://rawg-video-games-database.p.rapidapi.com/games/${data}/movies`,
        {
          headers: {
            "x-rapidapi-key":
              "0428eeeac2msh8952e9ad505f55bp10a66ajsnbda9c2e4d43e",
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
            useQueryString: true,
          },
        }
      )
    );
    const gameDetails = {
      id: game.data.id,
      name: game.data.name,
      description: game.data.description,
      rating: game.data.rating,
      image: game.data.background_image,
      addImage: game.data.background_image_additional,
      color: game.data.dominant_color,
      tags: game.data.tags.map((tag: any) => tag.name),
      suggestions: suggestions.data.results.map((game: any) => ({
        id: game.id,
        name: game.name,
        image: game.background_image,
        rating: game.rating,
        color: game.dominant_color,
      })),
      movie: movieGame.data.count && {
        id: movieGame.data.results[0].id,
        name: movieGame.data.results[0].name,
        preview: movieGame.data.results[0].preview,
        video: movieGame.data.results[0].data.max,
      },
    };
    yield put({
      type: actionTypes.GET_GAME_DETAILS,
      payload: gameDetails,
      isFaild: false,
    });
  } catch (err) {
    console.log(err);
  }
}

export default function* watchGetGames() {
  yield takeEvery(actionTypes.GET_ALL_GAMES_SAGA, getGames);
  yield takeEvery(actionTypes.GET_CATEGORY_GAMES_SAGA, getCategoryGames);
  yield takeEvery(actionTypes.GET_GAME_DETAILS_SAGA, getGameDetails);
}
