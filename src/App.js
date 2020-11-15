import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser } from "./adapters/SessionsAdapter";
import { fetchLikes } from "./adapters/LikesAdapter";

import NavBar from "./components/layout/Navbar";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Home from "./components/pages/Home";
// import Welcome from "./components/pages/Welcome";
import SearchPage from "./components/pages/SearchPage";
import UserProfile from "./components/pages/UserProfile";
import UserEdit from "./components/user/UserEdit";
import PetPage from "./components/pages/PetPage";
import "./App.css";

const App = ({ getCurrentUser, fetchLikes }) => {
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
          {/* <Route
            exact
            path="/"
            render={() => {
              if (loggedIn) {
                return <Home />;
              } else {
                return <Welcome />;
              }
            }}
          /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={UserProfile} />
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

// const mapStateToProps = ({ currentUser }) => ({
//   loggedIn: !!currentUser,
// });

export default connect(null, { getCurrentUser, fetchLikes })(App);
