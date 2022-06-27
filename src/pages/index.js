import React, { useRef, useState, useEffect } from "react"
import "../../reset.css"
import "../styles/main.css"
import styled from "styled-components"
import { Header, Menu, Content, Project, Cursor } from "../components"

const Wrapper = styled.div`
  position: relative;
`

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const circleRef = useRef()

  useEffect(() => {
    circleRef.current.moveTo(window.innerHeight / 2, window.innerWidth / 2)
    const onMove = ({ clientX, clientY }) => {
      circleRef.current.moveTo(clientX, clientY)
    }
    window.addEventListener("pointermove", onMove)
    return () => window.removeEventListener("pointermove", onMove)
  }, [])
  return (
    <Wrapper>
      <Cursor ref={circleRef} />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Content />
      <Project />
      <Menu isMenuOpen={isMenuOpen} />
    </Wrapper>
  )
}
