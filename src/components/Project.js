import React from "react"
import styled from "styled-components"
import backgroundOne from "../images/image-1.jpg"
import backgroundTwo from "../images/image-5.jpg"

const Project = () => {
  return (
    <Wrapper>
      <h2 className="project-title">
        <span className="project-title-main"> Hansika</span>
        <span className="project-title-sub">Brand Identity</span>
      </h2>
      <div
        className="project-img project-img-left invert"
        style={{ backgroundImage: `url(${backgroundOne})` }}
      ></div>
      <div
        className="project-img project-img-right invert"
        style={{ backgroundImage: `url(${backgroundTwo})` }}
      ></div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 35% 15% 1fr;
  grid-template-areas:
    "project-img-left . project-title"
    "project-img-left project-img-right project-img-right";
  background-color: #e1dfdd;
  z-index: -4;
  .project-title {
    grid-area: project-title;
    text-align: right;
    padding: 0 2vw 2vw 0;
    font-family: "Italiana", serif;
    font-weight: 400;
  }
  .project-title-main {
    font-size: clamp(2rem, 10vw, 9rem);
    display: block;
    line-height: 0.9;
  }
  .project-title-sub {
    font-size: clamp(1.5rem, 4vw, 3rem);
    line-height: 1;
    margin-right: 0.5vw;
  }
  .project-img {
    position: relative;
    background-size: cover;
    background-position: 50% 50%;
    margin-bottom: 40vh;
  }
  .project-img-left {
    grid-area: project-img-left;
    grid-column-end: 3;
    border-radius: 0 30vh 30vh 0;
    height: 40vh;
  }
  .project-img-right {
    grid-area: project-img-right;
    border-radius: 40vh 0 0 40vh;
    height: 60vh;
  }
`
export default Project
