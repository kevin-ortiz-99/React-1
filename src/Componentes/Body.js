import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Body.css';

class Body extends Component{ 
    render(){ 
    const {arreglo} = this.props;
    const {text}= this.props;

        return(
             <div>
                <p>{text}</p>
                { arreglo.map((p,index)=>(
                    <h2 key={index}>Elemento {p}</h2>
                ))}

                
            </div>
        );
    }
}

export default Body;

Body.propTypes={ 
    text:PropTypes.string,
    arreglo:PropTypes.array
}