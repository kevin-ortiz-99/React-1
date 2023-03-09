import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <div >
                <p>{this.props.children}</p>
                
            </div>
        );
    }
}

export default Footer;

Footer.protoType = {
    children: PropTypes.string
}

