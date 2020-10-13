import React from 'react'
import styled, { css } from 'styled-components'
import { Button, TextField } from '../components'

//styled
const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`
const ContainerStyled = styled.div`
  ${flex};  
  height: 100vh;
  width: 85%;
`
const FormStyled = styled.form`
  ${flex};
  height: 28rem;
  justify-content: space-between;
  min-width: 268px;
  background-color: whitesmoke;
  border-radius: 12px;
  padding: 10px;
  @media (max-width: 900px) {
    width: 100%;
  }    
`
const TitleStyled = styled.h3`
${flex}
letter-spacing: 3px;
color: #373D3f;
font-size: 22px;
margin-top: 0;
margin-bottom: 0;
`
const SpanStyled = styled.span`
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  font-size: 12px;
  margin-top: 15px;
`

interface iProps {
  register: boolean
  setRegister: Function
}
export default function Component({ register, setRegister }: iProps) {

  return (
    <ContainerStyled>
      <FormStyled>

        <TitleStyled>Register yourself.</TitleStyled>

        <TextField
          fullWidth
          margin="dense"
          variant="standard"
          label="First name"
        />
        <TextField
          fullWidth
          margin="dense"
          variant="standard"
          label="Last name"
        />
        <TextField
          fullWidth
          required
          type="email"
          margin="dense"
          variant="standard"
          label="E-mail"
        />
        <TextField
          fullWidth
          required
          type="password"
          margin="dense"
          variant="standard"
          label="Password"
        />

        <Button label="Register" />

        <SpanStyled onClick={() => setRegister(false)} >
          Back to login.
        </SpanStyled>

      </FormStyled>
    </ContainerStyled>
  )
}