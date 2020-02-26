import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import "react-dropdown/style.css";

import Navbar from "../Navbar";

import "./styles.css";
import "../../commonStyles.css"

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      console.log(this.props.location.state)
    const { total, shipping, items } = this.props.location.state.items

    return (
      <div className="checkoutform-container">
        <Navbar prevUrl="/cart" />
        CHECKOUT FORM
        <div>
            <p className=""> Order Summary </p>
            <p className=""> {total} </p>
        </div>
      </div>
    );
  }
}

export default withRouter(CheckoutForm);
