import React, { Component } from "react";
import Navbar from "../Navbar";
import { fetchItems } from '../../helpers/items'
import Item from "./components/Item";
import "./styles.css";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };

    this.componentDidMount = this.componentDidMount.bind(this)
    // this.fetchItems = this.fetchItems.bind(this);
  }

  componentDidMount() {
    fetchItems().then(items => {
        this.setState({items: items})
    });
  }

  // async fetchItems() {
  //   let items;
  //   // fetch items
  //   await fetch("/item/")
  //       .then(res => res.json())
  //       .then(json => {
  //           items = json.data
  //       })
  //       .catch(err => {
  //           console.log(err)
  //       })
  //   console.log(items)
  //   return items;
  // }

  render() {
    console.log(this.state.items)
    return (
      <div>
        <Navbar />
        <div className="store-container">
          {this.state.items ? this.state.items.map(
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
              ): null}
        </div>
      </div>
    );
  }
}

export default Store;
