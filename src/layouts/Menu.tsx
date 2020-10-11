import React from 'react'
import styled from 'styled-components'
import { Button } from '../components'

const Container = styled.nav`
display: flex;
justify-content: flex-start;
padding: 5px;
color: red;
background-color: violet;
`

export default function Menu() {
  return (
    <>
      <Container>
        <Button label="Cadastrar"></Button>
      </Container>
    </>
  )
}