import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
