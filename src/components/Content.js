import React from "react"
import styled from "styled-components"

const Content = () => {
  return (
    <Wrapper>
      <div className="content-wrapper">
        <p className="content-text-heading">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          cumque repellat beatae. Voluptates consectetur vero molestiae nihil
          eaque sit. Reprehenderit.
        </p>
        <p className="content-text-copy">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam
          eum beatae eius, recusandae facere velit laudantium molestias modi
          consectetur et, totam, a repudiandae distinctio minima! Veniam
          provident, nam placeat facere amet quam quos soluta nobis eaque natus
          molestiae consequatur iusto voluptates quo, eos magnam dolores
          incidunt voluptas reprehenderit officia!
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  padding: 30vh 4vw 10vh;
  background-color: #e1dfdd;
  z-index: -1;
  .content-wrapper {
    width: 100%;
    max-width: 1417px;
    margin: 0 auto;
    .content-text-heading {
      font-family: "Italiana", serif;
      font-size: clamp(1rem, 5.25vw, 10rem);
      line-height: 1;
      font-weight: 300;
    }
    .content-text-copy {
      font-size: clamp(1rem, 2vw, 1.25rem);
      line-height: 1.3;
      font-weight: 300;
      width: 50%;
      margin-bottom: 10vh;
      margin-top: 10vh;
    }
  }
`

export default Content
