import React, { Component, useState } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const IntroBackground = styled.div `

  width: 100%;
  background-color: #A08685;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5% 0%;
  margin-top: -.1%;
  flex-wrap: wrap;

`;

const IntroTitle = styled.h2 `

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  text-transform: uppercase;
  padding-bottom: 4%;

`;

const IntroText = styled.p `

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 30px;
text-align: center;
width: 50%;

`;

const Intro = props => {

  return (
    <div>
      <IntroBackground>
        <IntroTitle>
          {props.introTitle}
        </IntroTitle>
        <IntroText>
          {props.introText}
        </IntroText>
      </IntroBackground>
    </div>
  )
}

Intro.propTypes = {
  introTitle: PropTypes.string,
  introText: PropTypes.string,
}

export default Intro;
