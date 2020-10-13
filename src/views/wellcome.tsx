import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import Register from './register'
import Login from './login'

//styled
const fadeIn = keyframes`
  0%    { opacity: 0 }
  100 % { opacity: 1 }  
`
const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContainerStyled = styled.div`
  ${flex};
  height: 100vh;  
`
const BannerStyled = styled.div`
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
const FormStyled = styled.div`
  ${flex};
  animation: ${fadeIn};
  animation-duration: 0.8s;
  float: right;
  height: 100vh;
  width: 32%;
  @media (max-width: 900px) {
    width: 100%;
  }    
`


export default function Component() {

  const [register, setRegister] = useState(false)

  const WellcomeContext = React.createContext({
    register,
    setRegister
  })

  const ctx = { register, setRegister }

  return (
    <WellcomeContext.Provider value={ctx}>
      <WellcomeContext.Consumer>
        {
          ({ register, setRegister }) => (

            < ContainerStyled >
              <BannerStyled>
                Your banner here.
              </BannerStyled>
              <FormStyled>
                {
                  register
                    ?
                    <Register {...{ register, setRegister }} />
                    :
                    <Login {...{ register, setRegister }} />
                }
              </FormStyled>
            </ContainerStyled>
          )
        }
      </WellcomeContext.Consumer>
    </WellcomeContext.Provider >
  )
}