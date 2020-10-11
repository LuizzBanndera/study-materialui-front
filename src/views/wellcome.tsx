import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import Register from './register'
import Login from './login'

const fadeIn = keyframes`
  0%    { opacity: 0 }
  100 % { opacity: 1 }  
`
const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  ${flex};
  height: 100vh;  
`
const Banner = styled.div`
  ${flex};
  height: 100vh;
  float: left;
  width: 68%;
  background-color: #41179c;
  color: whitesmoke;
  @media (max-width: 900px) {
    visibility: hidden;
    width: 0%;
  }
`
const Form = styled.div`
  ${flex};
  animation: ${fadeIn};
  animation-duration: 2s;
  float: right;
  height: 100vh;
  width: 32%;
`
export default function Wellcome() {

  const [register, setRegister] = useState(true)

  return (
    <Container>
      <Banner>
        Banner
      </Banner>
      <Form>
        {
          register
            ?
            <Register />
            :
            <Login />
        }
      </Form>
    </Container>
  )
}