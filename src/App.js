import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Landing from "./assets/components/landing";
import PageLayout from "./assets/components/layout";
import Signin from "./assets/components/pages/auths/Signin";
import Signup from "./assets/components/pages/auths/Signup";
import Dashboard from "./assets/components/pages/Dashboard";
import Users from "./assets/components/pages/Users";
import Village from "./assets/components/pages/Village";
import Post from "./assets/components/pages/Post";
import Campaign from "./assets/components/pages/Campaign";
import Pages from "./assets/components/pages/Pages";

function App() {
  const login = false;
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact render={props => <Landing {...props} />} />
          {login ? (
            <PageLayout>
              <Switch>
                <Route path="/users" render={props => <Users {...props} />} />
                <Route
                  path="/village"
                  render={props => <Village {...props} />}
                />
                <Route path="/post" render={props => <Post {...props} />} />
                <Route
                  path="/campaign"
                  render={props => <Campaign {...props} />}
                />
                <Route path="/pages" render={props => <Pages {...props} />} />
                <Route
                  path="/dashboard"
                  render={props => <Dashboard {...props} />}
                />
                <Redirect to="/dashboard" />
              </Switch>
            </PageLayout>
          ) : (
            <Switch>
              <Route path="/signin" render={props => <Signin {...props} />} />
              <Route path="/signup" render={props => <Signup {...props} />} />
              <Redirect to="/signin" />
            </Switch>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
