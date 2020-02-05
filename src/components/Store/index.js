import React, { Component } from 'react';
import Navbar from '../Navbar';
import Item from './components/Item';
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
                <Item />
            </div>
        </div>
        )
    }
}

export default Store;