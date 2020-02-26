import React, { Component } from "react";
import Dropdown from "react-dropdown";
import { withRouter } from "react-router-dom";
import "react-dropdown/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faShareSquare } from "@fortawesome/free-solid-svg-icons";

import { addItem, getItems, removeItem } from "../../helpers/storage";
import { fetchItemInstances } from "../../helpers/items";
import QuantityInput from "../QuantityInput";
import Navbar from "../Navbar";

import "./styles.css";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "color",
      selectedSize: "size",
      selectedQts: 0,
      item: [],
      name: "",
      cost: 0,
      addItemSuccess: null,
    };

    this._onSelectColor = this._onSelectColor.bind(this);
    this._onSelectSize = this._onSelectSize.bind(this);
    this._onSelectQts = this._onSelectQts.bind(this);
  }

  componentDidMount() {
    fetchItemInstances(this.props.location.state.name).then(items => {
      this.setState({ item: items });
      this.setState({ name: items[0].name });
      this.setState({ cost: items[0].cost });
    });
  }

  _onSelectColor(e) {
    console.log(e.value);
    this.setState({ selectedColor: e.value });
    console.log(this.state.selectedColor);
  }

  _onSelectSize(e) {
    this.setState({ selectedSize: e.value });
  }

  _onSelectQts(val) {
    this.setState({ selectedQts: val });
  }

  addItemToCart() {

    const name = this.state.name;
    const qty = this.state.selectedQts;
    console.log(this.state.item);
    console.log(this.state.selectedSize, this.state.selectedColor);
    const item = this.state.item.filter(
      ({ size, color }) =>
        this.state.selectedSize === size && this.state.selectedColor === color
    )[0];

    // Error handling for item not found, do this using state instead
    if (!item || item === null) {
      this.setState({addItemSuccess: false})
      return
    }

    this.setState({addItemSuccess: true})
    const id = item.public_id;
    addItem({ id, name, qty });
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

  render() {
    const src = "https://via.placeholder.com/250";
    const { colors, sizes, qts } = this.parseData();
    let addItemStatusString = ''
    // Error handling for add item
    if (this.state.addItemSuccess === false){
      addItemStatusString = "Item not available. Try different values."
    }
    else if (this.state.addItemSuccess === true) {
      addItemStatusString = "Item added to cart."
    }


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
            <QuantityInput
              updateState={val => this._onSelectQts(val)}
              qty={this.state.selectedQts}
            />
            {/* TODO: add disabled classname if all properties are not selected */}
            <button onClick={() => this.addItemToCart()} className="addToCart">
              <p>ADD TO CART</p>
              <FontAwesomeIcon className="icon" icon={faCartPlus} size="2x" />
            </button>
          </div>
          {addItemStatusString}
        </div>
      </div>
    );
  }
}

export default withRouter(Item);
