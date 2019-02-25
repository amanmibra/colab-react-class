import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";

// containers
import Home from './Home';
import About from './About';
import Topics from './Topics';
import NotFound from './NotFound';

// images
import logo from './../images/logo.svg';

class App extends Component {

  renderLinks = () => {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }

  render() {
    return (
      <Router>
        <div>
          {this.renderLinks()}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route exact component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
