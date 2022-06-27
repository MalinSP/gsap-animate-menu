import React, { useRef } from "react"
import projects from "./projects"
import MenuItems from "./MenuItems"
import styled from "styled-components"

const Menu = ({ isMenuOpen }) => {
  const innerRef = useRef()
  const outerRef = useRef()
  const backgroundRef = useRef()
  const projectsRef = useRef()

  return (
    <>
      {isMenuOpen && (
        <Wrapper>
          <div className="project-wrapper" ref={projectsRef}>
            {projects.map(project => {
              return (
                <MenuItems
                  key={project.id}
                  {...project}
                  outerRef={outerRef}
                  innerRef={innerRef}
                  backgroundRef={backgroundRef}
                  projectsRef={projectsRef}
                />
              )
            })}
          </div>
          <div ref={outerRef} className="project-image-outer">
            <div ref={innerRef} className="project-image-inner"></div>
          </div>
          <StyledBackground ref={backgroundRef} />
        </Wrapper>
      )}
    </>
  )
}

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  .project-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .project-image-outer {
    pointer-events: none;
    position: absolute;
    width: 28vw;
    height: 42vw;
    left: 50%;
    overflow: hidden;
    background-color: #000;
    top: 20vh;
    z-index: 1;
    border-radius: 300px;
    opacity: 0;
    .project-image-inner {
      position: absolute;
      opacity: 0.8;
      top: -10%;
      left: 0;
      width: 100%;
      height: 115%;
      background-size: cover;
    }
  }
`
const StyledBackground = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  will-change: background-color;
  background-color: #b5b5b2;
  z-index: -1;
`

export default Menu
