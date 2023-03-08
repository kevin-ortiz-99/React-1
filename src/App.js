import './App.css';
import React, { Component } from 'react';
import Banner from './Componentes/Banner';
import Body from './Componentes/Body';
import Footer from './Componentes/Footer';


class App extends Component {
  render() {   
  return (
    <div className="App">
      <h1>Hola</h1>
      <Banner 
        texto="Texto 1"
      />
      <Banner 
        texto="Texto 2"
      />
      <Body 
        text="Texto 3" arreglo={[1,2,3,4,5]}
      />
    
      </div>
    );
  }
}

export default App;
