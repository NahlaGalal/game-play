import React, { useEffect } from "react";
import { connect } from "react-redux";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";
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
  empty: boolean;
}

const Download: React.FC<Props> = ({
  token,
  userImage,
  userName,
  downloads,
  getDownloads,
  deleteFromDownloads,
  empty,
}) => {
  const override = css`
    display: block;
    margin: 0 auto 40px;
  `;

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
          <PacmanLoader
            color="#34bfff"
            loading={!empty && downloads.length === 0}
            size={32}
            margin={2}
            css={override}
          />
          {!empty ? (
            downloads.map((game) => (
              <div className="item" key={game.id}>
                <img src={game.image} alt="Screenshot of game" />
                <div className="game-info">
                  <h2>
                    <Link to={`/game/${game.id}`}>{game.name}</Link>
                  </h2>
                  <p dangerouslySetInnerHTML={{ __html: game.description }}></p>
                </div>
                <div className="game-btns">
                  <button className="download-btn">
                    <img src={downloadIcon} alt="Download game" />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteFromDownloads({ gameId: game.id, token })
                    }
                  >
                    <img src={deleteIcon} alt="Delete game" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-downloads">No downloads yet</p>
          )}
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
  empty: state.downloads.empty,
});

const mapDispatchToProps = (dispatch: any) => ({
  getDownloads: (data: string) =>
    dispatch({ type: actionTypes.GET_DOWNLOADS_SAGA, data }),
  deleteFromDownloads: (data: { gameId: number; token: string }) =>
    dispatch({ type: actionTypes.DELETE_FROM_DOWNLOADS_SAGA, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Download);
