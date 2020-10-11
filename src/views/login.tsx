import React from 'react'
import styled, { css } from 'styled-components'
import { Email, Lock } from '@material-ui/icons'
import {
  TextField,
  Button,
  InputAdornment
} from '@material-ui/core'

const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  ${flex};
  height: 100vh;  
  width: 30%;
`
const Input = styled(TextField)`
  width: 16rem;
 .MuiOutlinedInput-root {
  }

`
const Form = styled.form`
  ${flex};
  height: 22rem;
  flex-direction: column;  
  justify-content: space-evenly;
`
const Title = styled.h3`
letter-spacing: 5px;
color: #373D3f;
font-size: 22px;
margin-top: 0;
`
const SingUp = styled.a`
  text-decoration: none;
  font-size: 12px;
`
export default function Login() {
  return (
    <Container>
      <Form>
        <Title>D-A-S-H</Title>
        <Input
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

        <Input
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

        <Button>Login</Button>
        <SingUp href="http://localhost:3000/">
          <span>Don`t have an account? Sing up!</span>
        </SingUp>

      </Form>
    </Container>
  )
}