import React from "react";
import { connect } from "react-redux";
import TopNav from "../components/TopNav";
import { Istore } from "../configureStore";

interface Props {
  token: string;
  userName: string;
  userImage: string;
}

const About: React.FC<Props> = ({ token, userImage, userName }) => {
  return (
    <div className="About">
      <header>
        <TopNav
          isAuth={token ? true : false}
          activePage="About"
          name={token ? userName : ""}
          imgUrl={token ? userImage : ""}
        />
      </header>

      <main>
        <h1>About Us</h1>
        <section>
          <div>
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              suscipit impedit quaerat doloribus est, nostrum delectus incidunt
              voluptatum at minima ea quis fuga. Maiores, eaque? Est cupiditate
              corporis molestiae nam.
            </p>
          </div>
          <div>
            <h2>Our Essence</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              suscipit impedit quaerat doloribus est, nostrum delectus incidunt
              voluptatum at minima ea quis fuga. Maiores, eaque? Est cupiditate
              corporis molestiae nam.
            </p>
          </div>
          <div>
            <h2>Our Promise</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              suscipit impedit quaerat doloribus est, nostrum delectus incidunt
              voluptatum at minima ea quis fuga. Maiores, eaque? Est cupiditate
              corporis molestiae nam.
            </p>
          </div>
          <div>
            <h2>Our Vibe</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              suscipit impedit quaerat doloribus est, nostrum delectus incidunt
              voluptatum at minima ea quis fuga. Maiores, eaque? Est cupiditate
              corporis molestiae nam.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = (state: Istore) => ({
  token: state.credentials.token,
  userName: state.credentials.name,
  userImage: state.credentials.image,
});

export default connect(mapStateToProps)(About);
