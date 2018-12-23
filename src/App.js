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
import LSD from './components/LSD';
import Radiological from './components/Radiological';
import Hypnosis from './components/Hypnosis';
import CovertlyRan from './components/CovertlyRan';
import SecretOperation from './components/SecretOperation';
import InstitutionAwareness from './components/InstitutionAwareness';
import PublicKnowledge from './components/PublicKnowledge';
import ThePublic from './components/ThePublic';
import Inspired from './components/Inspired';

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
      <LSD/>
      <Radiological/>
      <Hypnosis/>
      <CovertlyRan/>
      <SecretOperation/>
      <InstitutionAwareness/>
      <PublicKnowledge/>
      <ThePublic/>
      <Inspired/>
      </div>
    );
  }
}


export default App;
