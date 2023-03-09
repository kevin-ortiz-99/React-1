import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Body.css';

class Body extends Component {

    render() {
        const { arreglo } = this.props;
        const { text } = this.props;

        return (
            <div >
                <p className="Body1">{text}</p>
                {arreglo.map((p, index) => (
                    <h1 className="Body1" key={index}>Elemento {p}</h1>

                ))}                

                <button onClick={() => alert("Bienvenido Galgo")}>NO PRESIONAR!</button>
             </div>
        );
    }
}

export default Body;

Body.propTypes = {
    text: PropTypes.string,
    arreglo: PropTypes.array
}
