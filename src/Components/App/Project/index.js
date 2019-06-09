import React, { Component, useState } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";

const ProjectTitle = styled.h3 `

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  text-transform: uppercase;

`;

const Project = props => {

  return (
    <div>
      <ProjectTitle>
        {props.projectsTitle}
      </ProjectTitle>
    </div>
  )
}

Project.propTypes = {
  projectsTitle: PropTypes.string,
}

export default Project;
