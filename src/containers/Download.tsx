import React from 'react'
import { connect } from 'react-redux'
import TopNav from '../components/TopNav';
import altImage from "../images/home-game.png";
import downloadIcon from "../images/download.svg";
import deleteIcon from "../images/delete.svg";

interface Props {
  
}

const Download = (props: Props) => {
  return (
    <div className="Download">
      <header>
        <TopNav
          // isAuth={token ? true : false}
          isAuth={false}
          activePage="Home"
          // name={token ? userName : ""}
          // imgUrl={token ? userImage : ""}
        />
      </header>

      <main>
        <h1>BASKET</h1>
        <section>
          <div className="item">
            <img src={altImage} alt="aa" />
            <div className="game-info">
              <h2>Valorant</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="download-btn">
              <img src={downloadIcon} alt="Download game" />
            </button>
            <button className="delete-btn">
              <img src={deleteIcon} alt="Delete game" />
            </button>
          </div>
          <div className="item">
            <img src={altImage} alt="aa" />
            <div className="game-info">
              <h2>Valorant</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="download-btn">
              <img src={downloadIcon} alt="Download game" />
            </button>
            <button className="delete-btn">
              <img src={deleteIcon} alt="Delete game" />
            </button>
          </div>
          <div className="item">
            <img src={altImage} alt="aa" />
            <div className="game-info">
              <h2>Valorant</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <button className="download-btn">
              <img src={downloadIcon} alt="Download game" />
            </button>
            <button className="delete-btn">
              <img src={deleteIcon} alt="Delete game" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Download)
