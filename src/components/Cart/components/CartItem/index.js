import React, { Component } from "react";
import { Redirect } from "react-router";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faShareSquare } from "@fortawesome/free-solid-svg-icons";

import { fetchItemInstances } from '../../../../helpers/items'

import QuantityInput from '../../../QuantityInput';
import "./styles.css";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      redirect: false,
      selectedColor: '',
      selectedSize: '',
      selectedQty: 0,
    };
  }

  componentDidMount() {
    const { color, size, qty } = this.props
    console.log(this.props.qty)
    fetchItemInstances().then(items => {
      this.setState({ item: items });
    });

    this.setState({ selectedColor: color})
    this.setState({ selectedSize: size})
    this.setState({ selectedQty: qty})
    console.log("setting state: ", this.state.selectedQty, this.state.selectedColor, this.state.selectedSize)
  }

  _onSelectColor(e) {
    console.log(e.value);
    this.setState({ selectedColor: e.value });
    console.log(this.state.selectedColor);
    // TODO: update local storage with this new item
    // TODO: update items state array with this new item
  }

  _onSelectSize(e) {
    this.setState({ selectedSize: e.value });
    // TODO: update local storage with this new item
    // TODO: update items state array with this new item
  }

  _onSelectQts(value) {
    this.setState({ selectedQty: value });
    // TODO: update local storage with this new item
    // TODO: update items state array with this new item
  }

  render() {
    const { cost, name } = this.props;
    // TODO: use parse data function here too
    // TESTING DATA
    const colors = ["red", "blue"]
    const sizes = ["small"]
    // ENDS

    return (
      <div className="cartitem-container">
        <img src="https://via.placeholder.com/250" alt="" />
        <div className="content">
            <p className="price">{'$' + cost.toFixed(2)}</p>
            <p className="name">{name}</p>
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
          <QuantityInput updateState={(n) => this._onSelectQts(n)} qty={this.state.selectedQty} />
        </div>
      </div>
    );
  }
}

export default CartItem;
