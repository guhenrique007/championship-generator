import * as React from 'react';
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
`

const Headline = styled.h1`
  font-size: xxx-large;
  color: yellow;
`

export default function Header() {
  return (
    <Container>
      <Headline>
        Championship Creator
      </Headline>
    </Container>
  )
}