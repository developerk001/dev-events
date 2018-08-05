import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

import { incrementAsync, decrementAsync } from "./testActions";
import { openModal } from "../modals/modalActions";

const mapStateToProps = state => ({
  age: state.test.age,
  loading: state.test.loading
});

class TestComponent extends Component {
  render() {
    const { incrementAsync, decrementAsync, openModal, loading } = this.props;
    return (
      <div>
        <p>{!loading && this.props.age}</p>

        <Button
          onClick={() =>
            openModal("TestModal", {
              age: 42
            })
          }
          positive
          content="Open Modal"
        />
        <Button loading={loading} onClick={incrementAsync} positive content="Increment Async" />
        <Button loading={loading} onClick={decrementAsync} negative content="Decrement Async" />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    incrementAsync,
    decrementAsync,
    openModal
  }
)(TestComponent);
