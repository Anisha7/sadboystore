import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-regular-svg-icons'

import './styles.css';

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
        <div class="container">
            <div>
                <FontAwesomeIcon className="icon" icon={ faFrown } size="8x" />
            </div>
            <p class="text">merch</p>
        </div>
        )
    }
}

export default Home;