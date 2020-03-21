import React, { Component } from "react";
import { withRouter } from "react-router"
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faFrown
} from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevUrl: "/",
    };
  }

  render() {
    console.log(this.props.history, this.props.location)
    const { history } = this.props
    if (this.props.prevUrl && this.state.prevUrl === "/") {
      this.setState({prevUrl: this.props.prevUrl})
    }

    return (
      <div className="navbar-container">
        <FontAwesomeIcon
          className="icon"
          icon={faArrowAltCircleLeft}
          size="2x"
          onClick={() => history.push(this.state.prevUrl)} // this.setGoBackToTrue()}
        />
        <FontAwesomeIcon
          className="icon"
          icon={faFrown}
          size="2x"
          onClick={() => history.push('/')}
        />
        <FontAwesomeIcon
          className="icon"
          icon={faShoppingCart}
          size="2x"
          onClick={() => history.push('/cart')}
        />
      </div>
    );
  }
}

export default withRouter(Navbar);
