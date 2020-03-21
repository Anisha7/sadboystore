import React, { Component } from 'react';
import { withRouter } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-regular-svg-icons'

import './styles.css';

class Home extends Component {
    render() {
        const { history } = this.props
        return (
        <div className="home-container" onClick={() => history.push('/store')}>
            <div>
                <FontAwesomeIcon className="icon" icon={ faFrown } size="8x" />
            </div>
            <p className="text">merch</p>
        </div>
        )
    }
}

export default withRouter(Home);