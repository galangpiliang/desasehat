import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageLayout from "./assets/components/layout";

function App() {
  return (
    <Router>
      <div className="App">
        <PageLayout>
          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/village">
              <Village />
            </Route>
            <Route path="/post">
              <Post />
            </Route>
            <Route path="/campaign">
              <Campaign />
            </Route>
            <Route path="/pages">
              <Pages />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </PageLayout>
      </div>
    </Router>
  );
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}
function Users() {
  return <h2>Users</h2>;
}
function Village() {
  return <h2>Village</h2>;
}
function Post() {
  return <h2>Post</h2>;
}
function Campaign() {
  return <h2>Campaign</h2>;
}
function Pages() {
  return <h2>Pages</h2>;
}

export default App;
