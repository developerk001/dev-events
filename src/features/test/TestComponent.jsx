import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

import { incrementCounter, decrementCounter } from "./testActions";
import { openModal } from "../modals/modalActions";

const mapStateToProps = state => ({
  data: state.test.age
});

class TestComponent extends Component {
  render() {
    const { openModal } = this.props;
    return (
      <div>
        <Button onClick={() => openModal('TestModal', { age: 42 })} positive content="Open Modal" />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    incrementCounter,
    decrementCounter,
    openModal
  }
)(TestComponent);
