import React, { Component } from "react";
import "react-dropdown/style.css";

import Navbar from "../Navbar";

import "./styles.css";
import "../../commonStyles.css"

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="checkoutform-container">
        <Navbar prevUrl="/cart" />
        CHECKOUT FORM
      </div>
    );
  }
}

export default CheckoutForm;
