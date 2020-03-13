import React from "react";
import "./App.scss";
import { Button } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Desa Sehat</h1>
        <Link to="/">
          <Button type="primary">Home</Button>
        </Link>

        <Link to="/about">
          <Button type="primary">About</Button>
        </Link>

        <Link to="/users">
          <Button type="primary">Users</Button>
        </Link>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
