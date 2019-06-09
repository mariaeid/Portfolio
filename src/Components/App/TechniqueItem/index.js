import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TechniqueItemStyled = styled.p `

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  text-align: center;

`;

const TechniqueItem = props => {
  return (
    <TechniqueItemStyled>{props.name}</TechniqueItemStyled>
  );
};

export default TechniqueItem;
