import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";
// Components
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
// Images
import starEmptyIcon from "../images/star-empty.svg";
import starFullIcon from "../images/star-full.svg";
// Redux
import { actionTypes } from "../actions/types";
import { Istore } from "../configureStore";
import { ICategoryGames } from "../storeTypes";

interface Props {
  token: string;
  userName: string;
  userImage: string;
  getCategoryGames: (data: number) => void;
  history: any;
  categories: {
    id: number;
    name: string;
    image: string;
  }[];
  categoryGames: ICategoryGames;
}

const Games: React.FC<Props> = ({
  token,
  userImage,
  userName,
  getCategoryGames,
  history,
  categories = [],
  categoryGames = { games: [], suggestions: [], name: "", id: -1 },
}) => {
  const categoryId = (useParams() as any).id;

  const override = css`
    display: block;
    margin: 0 auto 40px;
  `;

  useEffect(() => {
    getCategoryGames(categoryId);
  }, [getCategoryGames, categoryId]);

  return (
    <div className="Home">
      <header>
        <TopNav
          isAuth={token ? true : false}
          activePage="Games"
          name={token ? userName : ""}
          imgUrl={token ? userImage : ""}
        />
        <h1 className="logo">
          well <span>Played</span>
        </h1>
      </header>
      <div className="container">
        <main>
          <PacmanLoader
            color="#34BFFF"
            loading={categoryGames.id !== +categoryId}
            size={32}
            margin={2}
            css={override}
          />
          {categoryGames.id === +categoryId && (
            <>
              <section>
                <h2>{categoryGames.name} Games</h2>
                <section>
                  {categoryGames.games.map((game) => (
                    <div
                      className="game"
                      key={game.id}
                      style={{
                        background: `url(${game.image}) #${game.color} center / cover`,
                      }}
                      onClick={() => history.push(`/game/${game.id}`)}
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
              <section>
                <h2>Suggestions For You</h2>
                <section className="games-section">
                  {categoryGames.suggestions.map((game) => (
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
                <Link to="/games"> View all </Link>
              </section>
            </>
          )}
        </main>
        {categories.length > 0 && (
          <aside>
            <h3>Categories</h3>
            <section className="scorallable-categories">
              {categories.map((category) => (
                <div
                  className="category"
                  onClick={() => history.push(`/games/${category.id}`)}
                  key={category.id}
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <p>{category.name}</p>
                </div>
              ))}
            </section>
          </aside>
        )}
      </div>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state: Istore) => ({
  token: state.credentials.token,
  userName: state.credentials.name,
  userImage: state.credentials.image,
  categories: state.gamesAPI.categories,
  categoryGames: state.gamesAPI.categoryGames,
});

const mapDispatchToProps = (dispatch: any) => ({
  getCategoryGames: (data: number) =>
    dispatch({ type: actionTypes.GET_CATEGORY_GAMES_SAGA, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
