import React, { lazy, Suspense } from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Spin } from "antd";
import Dashboard from "./assets/components/pages/Dashboard";
import Users from "./assets/components/pages/Users";
// import Village from "./assets/components/pages/Village";
import Post from "./assets/components/pages/Post";
import Campaign from "./assets/components/pages/Campaign";
import Articles from "./assets/components/pages/Articles";

// Redux
import { useSelector } from "react-redux";

const Landing = lazy(() => import("./assets/components/landing"));
const PageLayout = lazy(() => import("./assets/components/layout"));
const Signin = lazy(() => import("./assets/components/pages/auths/Signin"));
const Signup = lazy(() => import("./assets/components/pages/auths/Signup"));

function App() {
  const login = useSelector(state => state.auth);
  return (
    <Router>
      <Suspense
        fallback={
          <div
            className="loading"
            style={{
              width: "100vw",
              height: "100vh",
              alignItems: "center",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Spin tip="Loading..." />
          </div>
        }
      >
        <div className="App">
          <Switch>
            <Route path="/" exact render={props => <Landing {...props} />} />

            {login ? (
              <PageLayout user={login}>
                <Switch>
                  <Route path="/users" render={props => <Users {...props} />} />
                  {/* <Route
                    path="/village"
                    render={props => <Village {...props} />}
                  /> */}
                  <Route path="/post" render={props => <Post {...props} />} />
                  <Route
                    path="/campaign"
                    render={props => <Campaign {...props} />}
                  />
                  <Route
                    path="/articles"
                    render={props => <Articles {...props} />}
                  />
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
      </Suspense>
    </Router>
  );
}

export default App;
