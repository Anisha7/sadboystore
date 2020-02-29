import React, { Component } from "react";
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
      redirectToHome: false,
      redirectToCart: false,
      goBack: false,
      prevUrl: "/",
    };
  }

  setRedirectToHome() {
    this.setState({ redirectToHome: true });
  }

  setRedirectToCart() {
    this.setState({ redirectToCart: true });
  }

  setGoBackToTrue() {
    this.setState({ goBack : true });
  }

  render() {
    if (this.props.prevUrl && this.state.prevUrl === "/") {
      this.setState({prevUrl: this.props.prevUrl})
    }

    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }

    if (this.state.redirectToCart) {
      return <Redirect to="/cart" />;
    }

    if (this.state.goBack) {
      return <Redirect to={this.state.prevUrl} />;
    }

    return (
      <div className="navbar-container">
        <FontAwesomeIcon
          className="icon"
          icon={faArrowAltCircleLeft}
          size="2x"
          onClick={() => this.setGoBackToTrue()}
        />
        <FontAwesomeIcon
          className="icon"
          icon={faFrown}
          size="2x"
          onClick={() => this.setRedirectToHome()}
        />
        <FontAwesomeIcon
          className="icon"
          icon={faShoppingCart}
          size="2x"
          onClick={() => this.setRedirectToCart()}
        />
      </div>
    );
  }
}

export default Navbar;
