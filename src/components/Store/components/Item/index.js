import React, { Component } from "react";
import { Redirect } from 'react-router'
import "react-dropdown/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faShareSquare } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      redirect: false,
    };
  }

  componentDidMount() {
    this.fetchItemInstances().then(items => {
      this.setState({ item: items });
    });
  }

  async fetchItemInstances() {
    let items;
    // fetch items
    await fetch(`/item/${this.props.name}`)
      .then(res => res.json())
      .then(json => {
        items = json.data;
      })
      .catch(err => {
        console.log(err);
      });
    console.log(items);
    return items;
  }

  addItemToCart(itemId) {
    console.log("Adding item to cart");
    // TODO: check that color, size, and qty is chosen
    // TODO: add item to cart
  }

  redirectToItem(name) {
    console.log("here")
    // access prop this.props.location.state.name
    this.setState({redirect: true})
  }

  render() {
    const { cost, name } = this.props;
    const src = "https://via.placeholder.com/250";
    // parse data
    // colors, sizes, qtys based on current selected
    if (this.state.redirect) {
        return <Redirect to={{
            pathname: `${"/item/" + name}`,
            state: { name: name }
        }}/>
    }

    return (
      <div className="item-container">
        {/* TODO: onclick for share icon */}
        <FontAwesomeIcon
          className="item-image-icon"
          icon={faShareSquare}
          size="2x"
        />
        <div className="item-image">
          <img src={src} alt="" onClick={() => this.redirectToItem(name)} />
        </div>
        {/* TODO: add disabled classname if all properties are not selected */}
        <button
          //   onClick={() => this.addItemToCart()}
          className="addToCart"
        >
          <p>ADD TO CART</p>
          <FontAwesomeIcon className="icon" icon={faCartPlus} size="2x" />
        </button>
      </div>
    );
  }
}

export default Item;
