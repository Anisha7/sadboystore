import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import "./styles.css";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "color",
      selectedSize: "size",
      selectedQts: "qty"
    };

    this._onSelectColor = this._onSelectColor.bind(this);
    this._onSelectSize = this._onSelectSize.bind(this);
    this._onSelectQts = this._onSelectQts.bind(this);
  }

  _onSelectColor(e) {
    this.setState({ selectedColor: e.value });
  }

  _onSelectSize(e) {
    this.setState({ selectedSize: e.value });
  }

  _onSelectQts(e) {
    this.setState({ selectedQts: e.value });
  }

  addItemToCart(itemId) {
    console.log("Adding item to cart")
    // TODO: check that color, size, and qty is chosen
    // TODO: add item to cart
  }

  render() {
    // const { src, price, name, colors, sizes } = this.props

    // hard coded data for testing
    const src = "https://via.placeholder.com/250";
    const price = "$00.00";
    const name = "Item name";
    const colors = ["maroon", "white", "black"];
    const sizes = ["small", "medium", "large", "extra-large"];
    const qts = ["1", "2", "3", "4", "5"];
    const itemId = "01203aerf"
    // testing data ends
    return (
      <div className="item-container">
        <img src={src} alt="" />
        <div className="flex">
          <p className="price">{price}</p>
          <p className="name">{name}</p>
        </div>
        <div className="flex">
          <Dropdown
            controlClassName="dropdown"
            options={colors}
            onChange={this._onSelectColor}
            value={this.state.selectedColor}
            placeholder="Select an option"
          />
          <Dropdown
            controlClassName="dropdown"
            options={sizes}
            onChange={this._onSelectSize}
            value={this.state.selectedSize}
            placeholder="Select an option"
          />
        </div>
        <Dropdown
          controlClassName="dropdown"
          options={qts}
          onChange={this._onSelectQts}
          value={this.state.selectedQts}
          placeholder="Select an option"
        />
        <button onClick={() => this.addItemToCart(itemId)} className="addToCart">
            <p>ADD TO CART</p>
            <FontAwesomeIcon className="icon" icon={ faCartPlus } size="2x" />
            {/* TODO: add cart icon */}
        </button>
      </div>
    );
  }
}

export default Item;
