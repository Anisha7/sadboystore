import React, { Component } from "react";

import "./styles.css";

class QuantityInput extends Component {
  constructor(props) {
    super(props);
  }

  subtract() {
    if (this.props.qty > 0) {
        this.props.updateState(this.props.qty - 1)
    }
  }

  add() {
    this.props.updateState(this.props.qty + 1)
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
          value={this.props.qty}
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
