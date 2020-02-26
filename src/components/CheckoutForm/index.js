import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "react-dropdown/style.css";

import Navbar from "../Navbar";

import "./styles.css";
import "../../commonStyles.css";
import "./checkbox.css"

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      addressL1: null,
      addressL2: null,
      city: null,
      country: null,
      state: null,
      zip: null,
      email: null,
      phone: null
    };
  }

  render() {
    console.log(this.props.location.state);
    const { total, shipping, items } = this.props.location.state.items;

    return (
      <div className="checkoutform-container">
        <Navbar prevUrl="/cart" />
        <div className="section">
          <div className="inline">
            <p className="heading"> Order Summary </p>
            <p className="heading"> ${total.toFixed(2)} </p>
          </div>
          {items.map(({ name, cost }) => (
            <div className="inline">
              <p className=""> {name}</p>
              <p className=""> ${cost.toFixed(2)} </p>
            </div>
          ))}
          <div className="inline">
            <p className=""> Shipping</p>
            <p className="">
              {" "}
              {isNaN(shipping) ? shipping : "$" + shipping.toFixed(2)}{" "}
            </p>
          </div>
        </div>
        <div className="section">
          <p className="heading"> Shipping Address </p>
          <div className="inline">
            <input
              type="text"
              placeholder="First name"
              value={this.state.firstName}
              onChange={e => this.setState({ firstName: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={e => this.setState({ lastName: e.target.value })}
              required
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            value={this.state.addressL1}
            onChange={e => this.setState({ addressL1: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc (optional)"
            value={this.state.addressL2}
            onChange={e => this.setState({ addressL2: e.target.value })}
          />
          <input
            type="text"
            placeholder="City"
            value={this.state.city}
            onChange={e => this.setState({ city: e.target.value })}
            required
          />
          <div className="inline">
            {/* TODO: add dropdown for country and state */}
            <input
              type="number"
              placeholder="Zip code"
              value={this.state.zip}
              onChange={e => this.setState({ zip: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="section">
          <p className="heading"> Contact Information </p>
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            required
          />
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            placeholder="Phone"
            value={this.state.phone}
            onChange={e => this.setState({ phone: e.target.value })}
            required
          />
          {/* TODO: checkbox */}
          <div className="checkbox">
            <input
              type="checkbox"
              id="textOrderStatusCheckbox"
              name="textOrderStatusCheckbox"
              value="textOrderStatus"
            />
            <span>
              Recieve order status via text
            </span>
          </div>
        </div>
        <div className="section">
          {/* TODO */}
          <p className="heading"> Payment Information </p>
        </div>
        <button>PLACE ORDER</button>
      </div>
    );
  }
}

export default withRouter(CheckoutForm);
