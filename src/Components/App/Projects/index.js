import React, { Component, useState } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import Project from '../Project';

const ProjectsBackground = styled.div `

  width: 100%;
  background-color: #E2CDC2;
  color: #322E36;
  display: flex;
  justify-content: center;
  padding: 5% 0%;

`;

const ProjectsTitle = styled.h2 `

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  text-transform: uppercase;
  padding-bottom: 4%;

`;

const Projects = props => {

  return (
    <div>
      <ProjectsBackground>
        <ProjectsTitle>
          {props.projectsTitle}
        </ProjectsTitle>
      </ProjectsBackground>
    </div>
  )
}

Projects.propTypes = {
  projectsTitle: PropTypes.string,
}

export default Projects;
