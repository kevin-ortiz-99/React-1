import './App.css';
import React, { Component } from 'react';
import Header from './Componentes/Header';
import Banner from './Componentes/Banner';
import Body from './Componentes/Body';
import Footer from './Componentes/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner
          texto="Texto 1"
        />

        <Header />

        <Banner
          texto="Texto 2"
        />

        <div className="espacio"> </div>
        <Body
          text="Texto 3" arreglo={[1, 2, 3, 4, 5]}
        />

        <Footer>
          texto 4
        </Footer>

      </div>
    );
  }
}

export default App;
