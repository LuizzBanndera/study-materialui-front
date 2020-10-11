import React from 'react'
import styled, { css } from 'styled-components'
import { Email, Lock } from '@material-ui/icons'
import { Button } from '../components'
import {
  TextField,
  InputAdornment
} from '@material-ui/core'

const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContainerSC = styled.div`
  ${flex};
  height: 100vh;  
  width: 30%;
`
const InputSC = styled(TextField)`
  width: 16rem;
`
const FormSC = styled.form`
  ${flex};
  height: 22rem;
  flex-direction: column;  
  justify-content: space-evenly;
`
const TitleSC = styled.h3`
letter-spacing: 5px;
color: #373D3f;
font-size: 22px;
margin-top: 0;
`
const SingUpSC = styled.a`
  text-decoration: none;
  font-size: 12px;
`

export default function Login() {
  return (
    <ContainerSC>
      <FormSC>
        <TitleSC>D-A-S-H</TitleSC>
        <InputSC
          autoFocus
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

        <InputSC
          label="Password"
          type="password"
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
        <SingUpSC href="http://localhost:3000/">
          <span>Don`t have an account? Sing up!</span>
        </SingUpSC>

      </FormSC>
    </ContainerSC>
  )
}