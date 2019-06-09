import React, { Component, useState } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import TechniqueItem from '../TechniqueItem';

const TechniquesBackground = styled.div `

  width: 100%;
  background-color: #322E36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5% 0%;
  flex-wrap: wrap;
  color: #FFFFFF;

`;

const TechniquesTitleContainer = styled.div `

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

const TechniquesTitle = styled.h2 `

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  text-transform: uppercase;

`;

const TechniquesTextContainer = styled.div `

  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 4%;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    height: 180px;
  }

  li {
    padding: 2% 30%;
  }


`;

const Techniques = props => {

  return (
    <div>
      <TechniquesBackground>
        <TechniquesTitleContainer>
          <img src={props.arrowLeft} />
          <TechniquesTitle>
            {props.techniquesTitle}
          </TechniquesTitle>
          <img src={props.arrowRight} />
        </TechniquesTitleContainer>
        <TechniquesTextContainer>
          <ul>
            {props.techniques.map((technique, key) => (
              <li>
                <TechniqueItem name = {technique} key = {key} />
              </li>
            ))}
          </ul>
        </TechniquesTextContainer>
      </TechniquesBackground>
    </div>
  )
}

Techniques.propTypes = {
  techniquesTitle: PropTypes.string,
}

export default Techniques;
