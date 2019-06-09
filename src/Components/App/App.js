import React, { Component } from 'react';
import './App.css';
import techniques from '../../Data/techniques';
import Header from './Header';
import Intro from './Intro';
import Techniques from './Techniques';
import arrowLeft from '../../images/arrowLeft.png';
import arrowRight from '../../images/arrowLRight.png';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div>
        <Header headerTitle="Web developer looking for new adventures"/>
        <Intro introTitle="Hi, I'm Maria" introText="A web developer student at Yrgo, Gothenburg looking for my first job as a developer. I´m an enthustiatic and open minded girl who found passion for programming. If you think I might be of interest to you, please have a look at my work and don´t hesitate to get in touch with me."/>
        <Techniques techniques={techniques} techniquesTitle="Techniques" arrowLeft={arrowLeft} arrowRight={arrowRight}/>
        <Projects projectsTitle="My Work" />
      </div>
    );
  }
}

export default App;
