import React from 'react';
import './App.css';
import MKUltraIntro from './components/MKUltraIntro'
import WhatIsMKUltra from './components/WhatsIsMKUltra'
import TheAgent from './components/TheAgent'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {   
    }
  }

    render() {

    return (
      <div className="App">

      <MKUltraIntro/>
      <WhatIsMKUltra/>
      <TheAgent/>

      </div>
    );
  }
}


export default App;
