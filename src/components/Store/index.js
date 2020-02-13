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
    this.items = undefined
  }

  componentDidMount() {
    this.items = this.fetchItems();
    this.setState({items: this.items})
    console.log(this.state.items)
  }

  fetchItems() {
    console.log("HERE");
    // fetch items
    // setstate

    // hardcoded:
    const src = "https://via.placeholder.com/250";
    const price = "$00.00";
    const name = "Item name";
    const colors = ["maroon", "white", "black"];
    const sizes = ["small", "medium", "large", "extra-large"];
    const qts = ["1", "2", "3", "4", "5"];
    const itemId = "01203aerf";
    const data = [{ src, price, name, colors, sizes, qts, itemId }];
    // console.log(data)
    // this.setState({ items: data })
    // this.state.items = data
    // console.log(this.state.items)
    // testing data ends

    return data;
  }

  render() {
    console.log(this.state.items)
    return (
      <div>
        <Navbar />
        <div className="store-container">
          {this.state.items.map(
                ({ src, price, name, colors, sizes, qts, itemId }) => (
                  <Item
                    key={itemId}
                    src={src}
                    price={price}
                    name={name}
                    colors={colors}
                    sizes={sizes}
                    qts={qts}
                    itemId={itemId}
                  />
                )
              )}
        </div>
      </div>
    );
  }
}

export default Store;
