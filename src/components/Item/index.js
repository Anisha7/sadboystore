import React, { Component } from "react";
import Dropdown from "react-dropdown";
import Navbar from "../Navbar";
import "react-dropdown/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faShareSquare } from "@fortawesome/free-solid-svg-icons";

import { fetchItemInstances } from '../../helpers/items'
import "./styles.css";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "color",
      selectedSize: "size",
      selectedQts: null,
      item: [],
      name: "",
      cost: 0
    };

    this._onSelectColor = this._onSelectColor.bind(this);
    this._onSelectSize = this._onSelectSize.bind(this);
    this._onSelectQts = this._onSelectQts.bind(this);
  }

  componentDidMount() {
    // TODO: test this works
    fetchItemInstances(this.props.name).then(items => {
      this.setState({ item: items });
      this.setState({ name: items[0].name });
      this.setState({ cost: items[0].cost });
    });
  }

  // async fetchItemInstances() {
  //   let items;
  //   // fetch items
  //   await fetch(`/item/${this.props.location.state.name}`)
  //     .then(res => res.json())
  //     .then(json => {
  //       items = json.data;
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   console.log(items);
  //   return items;
  // }

  _onSelectColor(e) {
    console.log(e.value);
    this.setState({ selectedColor: e.value });
    console.log(this.state.selectedColor);
  }

  _onSelectSize(e) {
    this.setState({ selectedSize: e.value });
  }

  _onSelectQts(e) {
    this.setState({ selectedQts: e.target.value });
  }

  parseData() {
    // get all colors, in all cases
    let colors = Array.from(new Set(this.state.item.map(inst => inst.color)));
    let sizes = Array.from(
      new Set(
        this.state.item
          .filter(inst => inst.color === this.state.selectedColor)
          .map(inst => inst.size)
      )
    );
    let qts = this.state.item
      .filter(inst => inst.color === this.state.selectedColor)
      .filter(inst => inst.size === this.state.selectedSize)
      .reduce((acc, curr) => acc + curr.available, 0);

    return { colors, sizes, qts };
  }

  addItemToCart(itemId) {
    console.log("Adding item to cart");
    // TODO: check that color, size, and qty is chosen
    // TODO: add item to cart
  }

  render() {
    const src = "https://via.placeholder.com/250";
    const { colors, sizes, qts } = this.parseData();

    return (
      <div>
        {/* TODO: use history to get prev url */}
        <Navbar prevUrl="/store" />
        <div className="container">
        <div className="item-container">
          {/* TODO: onclick for share icon */}
          <FontAwesomeIcon
            className="item-image-icon"
            icon={faShareSquare}
            size="2x"
          />
          <div className="item-image">
            <img src={src} alt="" />
          </div>
          <div className="flex">
            <p className="price">${this.state.cost.toFixed(2)}</p>
            <p className="name">{this.state.name}</p>
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
              // disabled is true if color is not selected
              // TODO: FIX, not working
              disabled={this.state.color === "color"}
            />
          </div>
          {/* TODO: change this input type number */}
          {/* <Dropdown
          controlClassName="dropdown"
          options={qts ? qts : []}
          onChange={this._onSelectQts}
          value={this.state.selectedQts}
          placeholder="Select an option"
          // disabled if color and size are not selected
          // TODO: FIX, not working
          disabled={this.state.color === "color" || this.state.size === "size"}
        /> */}
          {/* TODO: fix onChange */}
          <input
            onChange={e => this._onSelectQts(e)}
            placeholder={"qty"}
            value={this.state.selectedQts}
            className="dropdown"
            type="number"
          ></input>
          {/* TODO: add disabled classname if all properties are not selected */}
          <button
            //   onClick={() => this.addItemToCart()}
            className="addToCart"
          >
            <p>ADD TO CART</p>
            <FontAwesomeIcon className="icon" icon={faCartPlus} size="2x" />
          </button>
        </div>
        </div>
      </div>
    );
  }
}

export default Item;
