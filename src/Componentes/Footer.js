import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

class Footer extends Component { 
    render(){ 
        return(
            <div>
                 <p>{this.prop.children}</p>
            </div>
        );
    }
}

export default Footer;

Footer.prototype ={ 
    children:PropTypes.string
}

