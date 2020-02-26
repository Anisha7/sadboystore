import React, { Component } from "react";
import { Redirect } from "react-router";
import "react-dropdown/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faShareSquare } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import "../../../../commonStyles.css"

class CartSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const cost = 10
    const shipping = "TBD"
    const total = 10

    return (
      <div className="cartsummary-container">
        <p className="heading"> Order Summary </p>
        <div className="summary">
          <div className="inline">
            <p>Subtotal</p>
            <p>{"$" + cost.toFixed(2)}</p>
          </div>
          <div className="inline">
            <p>Shipping</p>
            <p>{isNaN(shipping) ? shipping : "$" + shipping.toFixed(2)}</p>
          </div>
          <div className="inline">
            <p className="bold">TOTAL</p>
            <p className="bold">{"$" + total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummary;
