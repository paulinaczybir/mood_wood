import React, { Component } from "react";
import Register from "./components/Register";
import History from "./components/History";
import Logs from "./components/Logs";
import ParentLogin from "./components/ParentLogin";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserId: null,
    };
  }

  getUserId = (id) => {
    this.setState({
      currentUserId: id,
    });
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText"></div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Sign up!
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/parentlogin" className="nav-link">
                    Sign in!
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/logs" className="nav-link">
                    Create a Log
                  </Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/register" component={Register}>
                <Register />
              </Route>
              <Route path="/parentlogin" component={ParentLogin}>
                <ParentLogin getUserId={this.getUserId} />
              </Route>
              <Route path="/logs/history" component={History}>
                <History currentUserId={this.state.currentUserId} />
              </Route>
              <Route path="/logs" component={Logs}>
                <Logs currentUserId={this.state.currentUserId} />
              </Route>
              <Route path="/" component={Home}>
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <div id="imgdiv">
        <img
          src="https://media.giphy.com/media/BqJc5y7Oq6wPS/giphy.gif"
          className="p-3 m-3 rounded mx-auto d-block"
          alt="logo"
        />
        <h1 id="hry" className="display-3 text-center">
          How are you felling today?
        </h1>
      </div>
      <div>
        <h1 className="display-4 text-center font-weight-light">
          All your emotions are welcome here.
        </h1>
      </div>
    </div>
  );
}
