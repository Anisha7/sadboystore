import React, { Component } from "react";
import { Redirect } from "react-router";
import "react-dropdown/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faShareSquare } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import "../../../../commonStyles.css"

class CheckoutButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick } = this.props

    return (
      <button className="checkoutbutton-container" onClick={onClick}>
        CHECKOUT
      </button>
    );
  }
}

export default CheckoutButton;
