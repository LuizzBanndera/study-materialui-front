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
  width: 30%;
`
const FormStyled = styled.form`
  ${flex};
  height: 22rem;
  flex-direction: column;  
  justify-content: space-between;
  min-width: 268px;    
`
const TitleStyled = styled.h3`
  text-align: center;
  letter-spacing: 5px;
  color: #373D3f;
  font-size: 22px;
  margin-top: 0;
`
const SingUpStyled = styled.a`
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

        <SingUpStyled href="#" onClick={() => setRegister(!register)}>
          <span>Don`t have an account? Sing up!</span>
        </SingUpStyled>

      </FormStyled>
    </ContainerStyled>
  )
}