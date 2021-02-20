import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import starEmptyIcon from "../images/star-empty.svg";
import starFullIcon from "../images/star-full.svg";

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="Home">
      <header>
        <TopNav
          isAuth={true}
          activePage="Home"
          name="Nahla Galal"
          imgUrl="https://via.placeholder.com/64"
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
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4 Empty" />
                      <img src={starEmptyIcon} alt="Star 5 Empty" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
            </section>
            <Link to="/games"> View all </Link>
          </section>
          <section>
            <h2>PC Games</h2>
            <section>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4 Empty" />
                      <img src={starEmptyIcon} alt="Star 5 Empty" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
            </section>
            <Link to="/games"> View all </Link>
          </section>
          <section>
            <h2>Most Downloaded Games</h2>
            <section>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4 Empty" />
                      <img src={starEmptyIcon} alt="Star 5 Empty" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
            </section>
            <Link to="/games"> View all </Link>
          </section>
          <section>
            <h2>Suggestions For You</h2>
            <section>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4 Empty" />
                      <img src={starEmptyIcon} alt="Star 5 Empty" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
              <div className="game" data-location="/game">
                <div className="game-info">
                  <p>Volarant</p>
                  <div>
                    <div className="stars">
                      <img src={starFullIcon} alt="Star 1 Full" />
                      <img src={starFullIcon} alt="Star 2 Full" />
                      <img src={starFullIcon} alt="Star 3 Full" />
                      <img src={starEmptyIcon} alt="Star 4" />
                      <img src={starEmptyIcon} alt="Star 5" />
                    </div>
                    <p>1.5 GB</p>
                  </div>
                </div>
              </div>
            </section>
            <Link to="/games"> View all </Link>
          </section>
        </main>
        <aside>
          <h3>Categories</h3>
          <section className="scorallable-categories">
            <div className="category" data-location="/games"> <p>Action</p> </div>
            <div className="category" data-location="/games"> <p>Action</p> </div>
            <div className="category" data-location="/games"> <p>Action</p> </div>
            <div className="category" data-location="/games"> <p>Action</p> </div>
            <div className="category" data-location="/games"> <p>Action</p> </div>
            <div className="category" data-location="/games"> <p>Action</p> </div>
            <div className="category" data-location="/games"> <p>Action</p> </div>
            <div className="category" data-location="/games"> <p>Action</p> </div>
            <div className="category" data-location="/games"> <p>Action</p> </div>
            <div className="category" data-location="/games"> <p>Action</p> </div>
            <div className="category" data-location="/games"> <p>Action</p> </div>
            <div className="category" data-location="/games"> <p>Action</p> </div>
            <div className="category" data-location="/games"> <p>Action</p> </div>
            <div className="category" data-location="/games"> <p>Action</p> </div>
            <div className="category" data-location="/games"> <p>Action</p> </div>
          </section>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
