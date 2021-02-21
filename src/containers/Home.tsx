import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// Components
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
// Images
import starEmptyIcon from "../images/star-empty.svg";
import starFullIcon from "../images/star-full.svg";
import { actionTypes } from "../actions/types";
import { Istore } from "../configureStore";
import { IGames } from "../storeTypes";

interface Props {
  getAllGames: () => void;
  games: IGames;
  categories: { id: number; name: string; image: string }[];
  history: any;
  token: string;
  userName: string;
  userImage: string;
}

const Home: React.FC<Props> = ({
  getAllGames,
  games = {
    mobileGames: [],
    pcGames: [],
    suggestions: [],
    mostDownloadedGames: [],
  },
  categories = [],
  history,
  userName,
  token,
  userImage
}) => {
  
  useEffect(() => {
    getAllGames();
  }, [getAllGames]);

  return (
    <div className="Home">
      <header>
        <TopNav
          isAuth={token ? true : false}
          activePage="Home"
          name={token ? userName : ""}
          imgUrl={token ? userImage : ""}
        />
        <h1 className="logo">
          well <span>Played</span>
        </h1>
      </header>

      <div className="container">
        <main>
          <section>
            <h2>Mobile Games</h2>
            <section>
              {games.mobileGames.map((game) => (
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
            <Link to="/games/1"> View all </Link>
          </section>
          <section>
            <h2>PC Games</h2>
            <section>
              {games.pcGames.map((game) => (
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
          <section>
            <h2>Most Downloaded Games</h2>
            <section>
              {games.mostDownloadedGames.map((game) => (
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
          <section>
            <h2>Suggestions For You</h2>
            <section>
              {games.suggestions.map((game) => (
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
        </main>
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
      </div>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state: Istore) => ({
  games: state.gamesAPI.games,
  categories: state.gamesAPI.categories,
  token: state.credentials.token,
  userName: state.credentials.name,
  userImage: state.credentials.image
});

const mapDispatchToProps = (dispatch: any) => ({
  getAllGames: () => dispatch({ type: actionTypes.GET_ALL_GAMES_SAGA }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
