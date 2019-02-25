import React, { Component } from 'react';

class Topic extends Component {
  render() {
    const match = this.props.match;
    // const { match } = this.props;
    return (
      <div>
        {match.params.topicType}
      </div>
    );
  }
}

export default Topic;
