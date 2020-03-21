import React, { Component } from "react";
import { Redirect, withRouter } from "react-router";

import Navbar from "../Navbar";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";
import CheckoutButton from "./components/CheckoutButton";
import { getItems, removeItem } from "../../helpers/storage";
import { fetchItemInstances } from "../../helpers/items";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartPlus, faShareSquare } from "@fortawesome/free-solid-svg-icons";

import "react-dropdown/style.css";
import "./styles.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      subtotal: 0
    };
  }

  componentDidMount() {
    this.setItemsFromLocalStorage();
  }

  // TODO using new route from backend
  // give backend a dictionary id -> qty
  setItemsFromLocalStorage() {
    const items = [];
    // convert getItems return to a dictionary of id (key) -> qty (value)
    getItems().forEach(({ name, id, qty }) => {
      // fetchItemInstances(name).then(el => {
      //   el = el.filter(({ public_id }) => public_id === id)[0];
      //   el = { ...el, qty };
      //   items.push(el);
      // });
    });

    console.log(items);
    this.setState({ items });

    // [{name, id, qty}]
    // return [
    //   {

    //   }
    // ]
  }

  deleteItem(id, name, qty) {
    // delete item from local storage
    removeItem({ id, name, qty });
    // delete item from state items array
    // --> reassigning items from updated local storage
    this.setItemsFromLocalStorage();
  }

  render() {
    const items = this.state.items;
    console.log(items, items.length);
    // console.log(this.state.items.length)
    // TODO: update passed in items to be
    // { total: "$00.00", shipping:"$00.00", items: [] }

    return (
      <div className="item-container">
        {/* TODO: use history to get prev url */}
        <Navbar prevUrl="/store" />
        <div>
          {/* TESTING */}
          {/* <CartItem
            public_id="012"
            name="Item"
            // piece={piece}
            cost={10}
            color="red"
            size="small"
            // avalaible={avalaible}
            // src={src}
            qty={6}
          /> */}
          {/* TESTING ENDS */}
          {this.state.items.map(({ public_id, name, cost, color, size, //src, // category, // avalaible,
            qty }, i) => (
            <CartItem
              key={`${i}-${name}`}
              public_id={public_id}
              name={name}
              // category={category}
              cost={cost}
              color={color}
              size={size}
              // avalaible={avalaible}
              // src={src}
              qty={qty}
              updateItemState={() => this.setItemsFromLocalStorage()}
            />
          ))}
        </div>
        <hr />
        <div>
          <CartSummary subtotal={this.state.subtotal} />
        </div>
        <div>
          <CheckoutButton
            onClick={() => {
              console.log(this.state.subtotal);
              const items = {
                total: this.state.subtotal,
                shipping: "TBD",
                items: this.state.items
              };
              return this.props.history.push({
                pathname: "/checkoutform",
                state: { items: items }
              });
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Cart);
