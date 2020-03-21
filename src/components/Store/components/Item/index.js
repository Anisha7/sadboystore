import React, { Component } from "react";
import { Redirect, withRouter } from "react-router";
import "react-dropdown/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faShareSquare } from "@fortawesome/free-solid-svg-icons";

import { addItem } from "../../../../helpers/storage";
import { fetchItemInstances } from "../../../../helpers/items";

import "./styles.css";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: []
    };
  }

  componentDidMount() {
    fetchItemInstances(this.props.name).then(items => {
      console.log("found: ", items);
      this.setState({ item: items });
    });
  }

  addItemToCart(id, name, qty) {
    addItem({ id, name, qty });
  }

  render() {
    const { name } = this.props; // id, cost,
    const src = "https://via.placeholder.com/250";
    // parse data
    // colors, sizes, qtys based on current selected

    return (
      <div className="item-container">
        {/* TODO: onclick for share icon */}
        <FontAwesomeIcon
          className="item-image-icon"
          icon={faShareSquare}
          size="2x"
        />
        <div className="item-image">
          <img
            src={src}
            alt=""
            onClick={() =>
              this.props.history.push({
                pathname: `${"/item/" + name}`,
                state: { name: name }
              })
            }
          />
        </div>
        {/* TODO: add disabled classname if all properties are not selected */}
        <button
          onClick={() =>
            this.addItemToCart(this.state.item[0].public_id, name, 1)
          }
          className="addToCart"
        >
          <p>ADD TO CART</p>
          <FontAwesomeIcon className="icon" icon={faCartPlus} size="2x" />
        </button>
      </div>
    );
  }
}

export default withRouter(Item);
