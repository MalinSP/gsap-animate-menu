import React, { forwardRef, useRef, useImperativeHandle } from "react"
import styled from "styled-components"
import { gsap } from "gsap"

const Cursor = forwardRef((props, ref) => {
  const el = useRef()
  useImperativeHandle(
    ref,
    () => {
      return {
        moveTo(x, y) {
          gsap.to(el.current, { x, y })
        },
      }
    },
    []
  )
  return <StyledCursor ref={el}></StyledCursor>
})
const StyledCursor = styled.div`
  /* cursor: pointer; */
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  will-change: transform;
  transform: translate(-50%, -50%);
  background: #9d9d9c;
  border-radius: 100%;
  pointer-events: none;
`

export default Cursor
