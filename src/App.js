import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser } from "./adapters/SessionsAdapter";
import { fetchLikes } from "./adapters/LikesAdapter";

import NavBar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import SearchPage from "./components/SearchPage";
import Login from "./components/Login";
import Profile from "./containers/Profile";
import PetPage from "./containers/PetPage";
import UserEdit from "./components/UserEdit";
import "./App.css";

const App = ({ getCurrentUser, fetchLikes, loggedIn }) => {
  useEffect(() => {
    getCurrentUser();
    fetchLikes();
    // eslint-disable-next-line
  }, [])

  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              if (loggedIn) {
                return <Home />;
              } else {
                return <Welcome />;
              }
            }}
          />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/edit" component={UserEdit} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/pets" component={SearchPage} />
          <Route
            path="/pets/:id"
            render={(props) => {
              const id = props.match.params.id;
              const history = props.history;
              return <PetPage id={id} history={history} />;
            }}
          />
          <Route
            exact
            path="/types/:type"
            render={(props) => {
              const type = props.match.params.type;
              return <SearchPage type={type} />;
            }}
          />
        </Switch>
      </Fragment>
    </Router>
  );
}

const mapStateToProps = ({ currentUser }) => ({
  loggedIn: !!currentUser,
});

export default connect(mapStateToProps, { getCurrentUser, fetchLikes })(App);
