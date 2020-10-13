import React from 'react'
import styled, { css } from 'styled-components'
import { Email, Lock } from '@material-ui/icons'
import { InputAdornment } from '@material-ui/core'
import { Button, TextField } from '../components'

//styled
const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const ContainerStyled = styled.div`
  ${flex};
  height: 100vh;  
  width: 85%;
`
const FormStyled = styled.form`
  ${flex};
  height: 22rem;
  flex-direction: column;  
  background-color: whitesmoke;
  border-radius: 12px;  
  justify-content: space-between;
  min-width: 268px;   
  padding: 10px;   
  @media (max-width: 900px) {
    width: 100%;
  }
`
const TitleStyled = styled.h3`
  text-align: center;
  user-select: none;
  letter-spacing: 5px;
  color: #373D3f;
  font-size: 22px;
  margin-top: 0;
`
const SpanStyled = styled.span`
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  font-size: 12px;
`


interface iProps {
  register: boolean
  setRegister: Function
}

export default function Component({ register, setRegister }: iProps) {

  return (
    <ContainerStyled>
      <FormStyled>
        <TitleStyled>D-A-S-H</TitleStyled>

        <TextField
          required
          fullWidth
          type="email"
          label="E-mail"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
        />

        <Button label="Login" />

        <SpanStyled onClick={() => setRegister(true)} >
          Don`t have an account? Sing up!
        </SpanStyled>

      </FormStyled>
    </ContainerStyled>
  )
}