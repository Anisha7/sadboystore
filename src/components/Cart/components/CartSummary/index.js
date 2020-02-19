import React, { Component } from "react";
import { Redirect } from "react-router";
import "react-dropdown/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faShareSquare } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

class CartSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <div>
        <p> store summary </p>
      </div>
    );
  }
}

export default CartSummary;
