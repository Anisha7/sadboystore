import React, { Component } from 'react';
import Navbar from '../Navbar';

import './styles.css';

class Store extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
        <div>
            <Navbar />
            <div className="store-container">
            <p className="text">hello</p>
            </div>
        </div>
        )
    }
}

export default Store;