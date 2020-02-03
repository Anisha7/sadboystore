import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-regular-svg-icons'

import './styles.css';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToStore: false
        }
    }

    setRedirectToStore() {
        this.setState({redirectToStore: true})
    }

    render() {
        if (this.state.redirectToStore) {
            return <Redirect to="/store" />
        }
        return (
        <div class="home-container" onClick={() => this.setRedirectToStore()}>
            <div>
                <FontAwesomeIcon className="icon" icon={ faFrown } size="8x" />
            </div>
            <p class="text">merch</p>
        </div>
        )
    }
}

export default Home;