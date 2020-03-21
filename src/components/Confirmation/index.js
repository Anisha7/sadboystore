import React, { Component } from "react";
import { Link } from "react-router-dom"
import Navbar from "../Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import "./styles.css";

class Confirmation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      // get confirmation number through passed in props
      // if null, redirect to error
      const confirmationNumber = 21039149
      // TODO: order tracking ??
    return (
      <div>
        <Navbar />
        <div className="confirmation-container">
          <h3>ORDER CONFIRMED</h3>
          <FontAwesomeIcon className="icon" icon={ faCheckCircle } size="6x" />
          <p>Confirmation number: </p>
          <p>{confirmationNumber}</p>
          <a href="">track your order</a>
          <button><Link to="/store">CONTINUE SHOPPING</Link></button>
        </div>
      </div>
    );
  }
}

export default Confirmation;
