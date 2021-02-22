import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
// Images
import altImage from "../images/home-game.png";
import starEmptyIcon from "../images/star-empty.svg";
import starFullIcon from "../images/star-full.svg";

interface Props {}

const Game = (props: Props) => {
  return (
    <div className="Game">
      <header>
        <TopNav
          // isAuth={token ? true : false}
          isAuth={false}
          activePage="Games"
          // name={token ? userName : ""}
          // imgUrl={token ? userImage : ""}
        />
      </header>
      <main>
        <header>
          <img src={altImage} alt="Screenshot of game" />
          <h1>Valorant</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <div className="rate-size">
            <div className="rate">
              <span>4.5</span>
              <div className="stars_empty">
                <img src={starEmptyIcon} alt="Star 1 Empty" />
                <img src={starEmptyIcon} alt="Star 2 Empty" />
                <img src={starEmptyIcon} alt="Star 3 Empty" />
                <img src={starEmptyIcon} alt="Star 4 Empty" />
                <img src={starEmptyIcon} alt="Star 5 Empty" />
              </div>
              <div className="stars_full">
                <div style={{}}>
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
        <section className="video-game">
          <img src={altImage} alt="dd" />
          <h2>Watch Video</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            nam, quas sit, eligendi dolor odit inventore saepe delectus sunt
            cumque magni. Suscipit necessitatibus porro veniam magni quidem
            veritatis laboriosam dolor.
          </p>
        </section>
        <button className="download-btn">
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
            {/* {categoryGames.suggestions.map((game) => (
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
            ))} */}
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
