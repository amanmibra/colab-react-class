import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';

// component
import Topic from './../components/topic';

class Topics extends Component {
  renderLinks = () => {
    return (
      <div>
        <ul>
          <li>
            <Link to="/topics/react">React</Link>
          </li>
          <li>
            <Link to="/topics/rails">Rails</Link>
          </li>
          <li>
            <Link to="/topics/sql">SQL</Link>
          </li>
        </ul>
        <hr />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Topics</h2>
        {this.renderLinks()}
        <Route exact path="/topics/:topicType" component={Topic} />
        <Route exact path="/topics"
          render={() => <h3>Please select a topic!</h3>}
        />
        <Route exact />
      </div>
    );
  }
}

export default Topics;
