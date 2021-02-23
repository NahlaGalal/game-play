import React, { useEffect } from "react";
import { connect } from "react-redux";
import TopNav from "../components/TopNav";
import downloadIcon from "../images/download.svg";
import deleteIcon from "../images/delete.svg";
import { Istore } from "../configureStore";
import { actionTypes } from "../actions/types";
import { Link } from "react-router-dom";

interface Props {
  token: string;
  userName: string;
  userImage: string;
  getDownloads: (data: string) => void;
  downloads: {
    id: number;
    name: string;
    description: string;
    image: string;
  }[];
  deleteFromDownloads: (data: { gameId: number; token: string }) => void;
}

const Download: React.FC<Props> = ({
  token,
  userImage,
  userName,
  downloads,
  getDownloads,
  deleteFromDownloads,
}) => {
  useEffect(() => {
    getDownloads(token);
  }, [getDownloads, token]);

  return (
    <div className="Download">
      <header>
        <TopNav
          isAuth={token ? true : false}
          activePage="Download"
          name={token ? userName : ""}
          imgUrl={token ? userImage : ""}
        />
      </header>

      <main>
        <h1>BASKET</h1>
        <section>
          {downloads.map((game) => (
            <div className="item" key={game.id}>
              <img src={game.image} alt="Screenshot of game" />
              <div className="game-info">
                <h2>
                  <Link to={`/game/${game.id}`}>{game.name}</Link>
                </h2>
                <p dangerouslySetInnerHTML={{ __html: game.description }}></p>
              </div>
              <button className="download-btn">
                <img src={downloadIcon} alt="Download game" />
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteFromDownloads({ gameId: game.id, token })}
              >
                <img src={deleteIcon} alt="Delete game" />
              </button>
            </div>
          ))}
          <p></p>
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = (state: Istore) => ({
  token: state.credentials.token,
  userName: state.credentials.name,
  userImage: state.credentials.image,
  downloads: state.downloads.downloads,
});

const mapDispatchToProps = (dispatch: any) => ({
  getDownloads: (data: string) =>
    dispatch({ type: actionTypes.GET_DOWNLOADS_SAGA, data }),
  deleteFromDownloads: (data: { gameId: number; token: string }) =>
    dispatch({ type: actionTypes.DELETE_FROM_DOWNLOADS_SAGA, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Download);
