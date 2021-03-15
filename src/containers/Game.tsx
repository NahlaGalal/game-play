import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";
import { actionTypes } from "../actions/types";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import { Istore } from "../configureStore";
// Images
import altImage from "../images/home-game.png";
import starEmptyIcon from "../images/star-empty.svg";
import starFullIcon from "../images/star-full.svg";
import { IGameDetails } from "../storeTypes";

interface Props {
  getGameDetails: (data: number) => void;
  gameDetails: IGameDetails;
  token: string;
  userName: string;
  userImage: string;
  history: any;
  postAddToDownloads: (data: { gameId: number; token: string }) => void;
  success: boolean;
}

const Game: React.FC<Props> = ({
  getGameDetails,
  gameDetails,
  token,
  userImage,
  userName,
  history,
  postAddToDownloads,
  success,
}) => {
  const gameId = (useParams() as any).id;

  const override = css`
    display: block;
    margin: 0 auto 40px;
  `;

  useEffect(() => {
    getGameDetails(gameId);
  }, [getGameDetails, gameId]);

  useEffect(() => {
    if (success) history.push("/downloads");
  }, [success, history]);

  return (
    <div className="Game">
      <header>
        <TopNav
          isAuth={token ? true : false}
          activePage="Games"
          name={token ? userName : ""}
          imgUrl={token ? userImage : ""}
        />
      </header>
      <main>
        <PacmanLoader
          color="#34BFFF"
          loading={gameDetails.id !== +gameId}
          size={32}
          margin={2}
          css={override}
        />
        {gameDetails.id === +gameId && (
          <>
            <header>
              <img src={gameDetails.image} alt="Screenshot of game" />
              <h1>{gameDetails.name}</h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: gameDetails.description || "",
                }}
              ></p>
              <div className="rate-size">
                <div className="rate">
                  <span>{gameDetails.rating}</span>
                  <div className="stars_empty">
                    <img src={starEmptyIcon} alt="Star 1 Empty" />
                    <img src={starEmptyIcon} alt="Star 2 Empty" />
                    <img src={starEmptyIcon} alt="Star 3 Empty" />
                    <img src={starEmptyIcon} alt="Star 4 Empty" />
                    <img src={starEmptyIcon} alt="Star 5 Empty" />
                  </div>
                  <div className="stars_full">
                    <div style={{ width: `${gameDetails.rating * 20}%` }}>
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starFullIcon} alt="Star 4 Full" />
                      <img src={starFullIcon} alt="Star 5 Full" />
                    </div>
                  </div>
                </div>
                <p className="size">1.5GB</p>
              </div>
            </header>
            {gameDetails.movie.name && (
              <section className="video-game">
                <img
                  src={gameDetails.movie.preview}
                  alt="Preview of video game"
                />
                <h2>Watch Video</h2>
                <p>{gameDetails.movie.name}</p>
              </section>
            )}
            <button
              className="download-btn"
              onClick={() => postAddToDownloads({ gameId, token })}
            >
              <Link to="/download">Download</Link>
            </button>
            <section className="opinions-section">
              <header>
                <h2>Opinions</h2>
                <button>Add Opinion</button>
              </header>
              <div className="opinion">
                <img src={altImage} alt="User avatar" className="user-image" />
                <p className="user-name">Nahla Galal</p>
                <div>
                  <img src={altImage} alt="Comment" className="opinion-image" />
                  <p>The game is very sweet and fun</p>
                </div>
              </div>
              <div className="opinion">
                <img src={altImage} alt="User avatar" className="user-image" />
                <p className="user-name">Nahla Galal</p>
                <div>
                  <img src={altImage} alt="Comment" className="opinion-image" />
                  <p>The game is very sweet and fun</p>
                </div>
              </div>
              <Link to="/">View more</Link>
            </section>
            <section className="suggestions">
              <h2>Suggestions For You</h2>
              <section className="games-section">
                {gameDetails.suggestions.map((game) => (
                  <div
                    className="game"
                    onClick={() => history.push(`/game/${game.id}`)}
                    key={game.id}
                    style={{
                      background: `url(${game.image}) #${game.color} center / cover`,
                    }}
                  >
                    <div className="game-info">
                      <p>{game.name}</p>
                      <div>
                        <div className="stars_empty">
                          <img src={starEmptyIcon} alt="Star 1 Empty" />
                          <img src={starEmptyIcon} alt="Star 2 Empty" />
                          <img src={starEmptyIcon} alt="Star 3 Empty" />
                          <img src={starEmptyIcon} alt="Star 4 Empty" />
                          <img src={starEmptyIcon} alt="Star 5 Empty" />
                        </div>
                        <div className="stars_full">
                          <div style={{ width: `${game.rating * 20}%` }}>
                            <img src={starFullIcon} alt="Star 1 Full" />
                            <img src={starFullIcon} alt="Star 2 Full" />
                            <img src={starFullIcon} alt="Star 3 Full" />
                            <img src={starFullIcon} alt="Star 4 Full" />
                            <img src={starFullIcon} alt="Star 5 Full" />
                          </div>
                        </div>
                        <p>{game.rating}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: Istore) => ({
  gameDetails: state.gamesAPI.gameDetails,
  token: state.credentials.token,
  userName: state.credentials.name,
  userImage: state.credentials.image,
  success: state.downloads.success,
});

const mapDispatchToProps = (dispatch: any) => ({
  getGameDetails: (data: number) =>
    dispatch({ type: actionTypes.GET_GAME_DETAILS_SAGA, data }),
  postAddToDownloads: (data: { gameId: number; token: string }) =>
    dispatch({ type: actionTypes.POST_ADD_TO_DOWNLOADS_SAGA, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
