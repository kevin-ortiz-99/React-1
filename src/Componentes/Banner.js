import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

class Banner extends Component{ 
    render(){ 
        return(
            <div className="Banner">
                <p>{this.props.texto}</p>
             </div>
        );
    }
}

export default Banner;

Banner.propTypes={ 
    texto:PropTypes.string
}
