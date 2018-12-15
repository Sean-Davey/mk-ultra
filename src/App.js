import React from 'react';
import './App.css';
import './styles/style.css'
import MKUltraIntro from './components/MKUltraIntro'
import WhatIsMKUltra from './components/WhatsIsMKUltra'
import TheAgent from './components/TheAgent'
import ArmsRace from './components/ArmsRace';
import Redacted from './components/Redacted';
import TheAim from './components/TheAim';
import TheSubject from './components/TheSubject';

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
      <ArmsRace/>
      <Redacted/>
      <TheAim/>
      <TheSubject/>
      </div>
    );
  }
}


export default App;
