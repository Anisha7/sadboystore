import React, { Component } from "react";
import Navbar from "../Navbar";
import Item from "./components/Item";
import "./styles.css";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.componentDidMount = this.componentDidMount.bind(this)
    this.fetchItems = this.fetchItems.bind(this);
  }

  componentDidMount() {
    this.fetchItems().then(items => {
        // filter items by name
        // const itemSet = new Set()
        // items.forEach(item => {
        //     itemSet.add(item.name)
        // })
        this.setState({items: items})
    });
  }

  async fetchItems() {
    let items;
    // fetch items
    await fetch("/item/")
        .then(res => res.json())
        .then(json => {
            items = json.data
        })
        .catch(err => {
            console.log(err)
        })
    console.log(items)

    // hardcoded:
    // const src = "https://via.placeholder.com/250";
    // const price = "$00.00";
    // const name = "Item name";
    // const cost = ["maroon", "white", "black"];
    // const sizes = ["small", "medium", "large", "extra-large"];
    // const qts = ["1", "2", "3", "4", "5"];
    // const itemId = "01203aerf";
    // const data = [{ src, price, name, cost, sizes, qts, itemId }];

    return items;
  }

  render() {
    console.log(this.state.items)
    return (
      <div>
        <Navbar />
        <div className="store-container">
          {this.state.items.map(
                ({ public_id, name, piece, cost, color, size, avalaible, src}, i) => (
                  <Item
                    key={`${i}-${name}`}
                    public_id={public_id}
                    name={name}
                    // piece={piece}
                    cost={cost}
                    // color={color}
                    // size={size}
                    // avalaible={avalaible}
                    // src={src}
                  />
                )
              )}
        </div>
      </div>
    );
  }
}

export default Store;
