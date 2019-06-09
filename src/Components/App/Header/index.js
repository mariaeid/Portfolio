import React, { Component, useState } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import headerImg from '../../../images/hero.png';

const HeaderBackground = styled.div `

  width: 100%;
  height: 80vh;
  background-image: url(${headerImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  position : relative;

`;

const HeaderTitle = styled.h1 `

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  line-height: 78px;
  text-align: right;
  color: #22172D;
  position: absolute;
  top: 5%;
  right: 8%;
  width: 60%;

  @media (max-width: 1024px) {
    font-size: 58px;
    line-height: 68px;
    width: 70%
  }

`;

const Header = props => {

  return (
    <div>
      <HeaderBackground />
        <HeaderTitle>
          {props.headerTitle}
        </HeaderTitle>
    </div>
  )
}

Header.propTypes = {
  headerTitle: PropTypes.string,
}

export default Header;
