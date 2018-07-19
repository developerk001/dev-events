import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

import { incrementCounter, decrementCounter } from "./testActions";

const mapStateToProps = state => ({
  data: state.test.age
});

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>age is {this.props.data}</h1>
        <Button onClick={incrementCounter} positive content="+" />
        <Button onClick={decrementCounter} negative content="-" />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    incrementCounter,
    decrementCounter
  }
)(TestComponent);
