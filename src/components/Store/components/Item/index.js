import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faShareSquare } from '@fortawesome/free-solid-svg-icons'

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
    const { src, price, name, colors, sizes, qts, itemId } = this.props

    return (
      <div className="item-container">
        {/* TODO: onclick for share icon */}
        <FontAwesomeIcon className="item-image-icon" icon={ faShareSquare } size="2x" />
        <div className="item-image">
            <img src={src} alt="" />
        </div>
        <div className="flex">
          <p className="price">{price}</p>
          <p className="name">{name}</p>
        </div>
        <div className="flex">
          <Dropdown
            controlClassName="dropdown"
            options={colors ? colors : []}
            onChange={this._onSelectColor}
            value={this.state.selectedColor}
            placeholder="Select an option"
          />
          <Dropdown
            controlClassName="dropdown"
            options={sizes ? sizes : []}
            onChange={this._onSelectSize}
            value={this.state.selectedSize}
            placeholder="Select an option"
          />
        </div>
        <Dropdown
          controlClassName="dropdown"
          options={qts ? qts : []}
          onChange={this._onSelectQts}
          value={this.state.selectedQts}
          placeholder="Select an option"
        />
        <button onClick={() => this.addItemToCart(itemId)} className="addToCart">
            <p>ADD TO CART</p>
            <FontAwesomeIcon className="icon" icon={ faCartPlus } size="2x" />
        </button>
      </div>
    );
  }
}

export default Item;
