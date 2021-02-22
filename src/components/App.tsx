import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Game from "../containers/Game";
import Games from "../containers/Games";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Signup from "../containers/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/games/:id" component={Games} />
        <Route exact path="/game/:id" component={Game} />
        <Redirect exact from="/games" to="/games/1" />
        <Redirect exact from="/game" to="/games/1" />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
