import React, { Component } from "react";

import "./styles.css";

class QuantityInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  componentWillReceiveProps() {
    this.setState({value: this.props.qty})
    console.log("VALUE: ", this.state.value,"QTY: ", this.props.qty)
  }

  subtract() {
    if (this.props.qty > 0) {
        this.props.updateState(this.state.value - 1)
        this.setState({value : this.props.qty})
    }
  }

  add() {
    this.props.updateState(this.state.value + 1)
    this.setState({value : this.props.qty})
  }

  render() {
    return (
      <div class="quantity buttons_added">
        <input
          type="button"
          value="-"
          class="minus"
          onClick={() => this.subtract()}
        />
        <input
          type="number"
          step="1"
          min="1"
          max=""
          name="quantity"
          value={this.state.value}
          title="Qty"
          class="input-text qty text"
          size="4"
          pattern=""
          inputmode=""
        />
        <input
          type="button"
          value="+"
          class="plus"
          onClick={() => this.add()}
        />
      </div>
    );
  }
}

export default QuantityInput;
