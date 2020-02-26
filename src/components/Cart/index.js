import React, { Component } from "react";
import { Redirect } from "react-router";

import Navbar from "../Navbar";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import CheckoutButton from "./components/CheckoutButton";

import "react-dropdown/style.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartPlus, faShareSquare } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      redirect: false,
      subtotal: 0
    };
  }

  componentDidMount() {
    this.fetchItemIds().then(itemIds => {
      this.fetchItemInstances(itemIds).then((items, cost) => {
        this.setState({ items: items, subtotal: cost });
      });
    });
  }

  async fetchItemIds() {
    // get item ids stored on local storage
    return [0];
  }

  async fetchItemInstances(itemIds) {
    // for all item (Ids, qty),
    // fetch the item
    // add cost to total
    // return items and subtotal cost
    return { items: [], subtotal: 0 };
  }

  deleteItem(id) {
    // delete item from local storage and from state items array
  }

  render() {
    // TODO: update passed in items to be 
    // { total: "$00.00", shipping:"$00.00", items: [] }
    const items = {
      total: this.state.subtotal,
      shipping: "TBD",
      items: this.state.items
    }
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: `${"/checkoutform"}`,
            state: { items }
          }}
        />
      );
    }

    return (
      <div className="item-container">
        {/* TODO: use history to get prev url */}
        <Navbar prevUrl="/store" />
        <div>
          {/* TESTING */}
          <CartItem
            public_id="012"
            name="Item"
            // piece={piece}
            cost={10}
            color="red"
            size="small"
            // avalaible={avalaible}
            // src={src}
            qty={6}
          />
          {/* TESTING ENDS */}
          {/* {this.state.items
            ? this.state.items.map(
                (
                  {
                    public_id,
                    name,
                    piece,
                    cost,
                    color,
                    size,
                    avalaible,
                    src,
                    qty
                  },
                  i
                ) => (
                  <CartItem
                    key={`${i}-${name}`}
                    public_id={public_id}
                    name={name}
                    // piece={piece}
                    cost={cost}
                    color={color}
                    size={size}
                    // avalaible={avalaible}
                    // src={src}
                    qty={qty}
                  />
                )
              )
            : null} */}
        </div>
        <hr />
        <div>
          <CartSummary subtotal={this.state.subtotal} />
        </div>
        <div>
          <CheckoutButton onClick={() => this.setState({redirect: true})} />
        </div>
      </div>
    );
  }
}

export default Cart;
