import React from 'react'
import styled, { css } from 'styled-components'
import { TextField, Button } from '@material-ui/core'

const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Container = styled.div`
  ${flex};
`
const Form = styled.form`
  ${flex};
  height: 22rem;
  justify-content: space-evenly;
`
const Input = styled(TextField)`
  width: 16rem;
 .MuiOutlinedInput-root {
  }
`
const Title = styled.h3`
letter-spacing: 5px;
color: #373D3f;
font-size: 22px;
margin-top: 0;
`

export default function Register() {

  return (
    <Container>
      <Form>
        <Title>Register yourself.</Title>
        <Input
          autoFocus
          label="First name"
          variant="outlined"
          margin="dense"
        />
        <Input
          label="Last name"
          variant="outlined"
          margin="dense"
        />
        <Input
          label="E-mail"
          variant="outlined"
          type="email"
          margin="dense"
        />
        <Input
          label="Password"
          variant="outlined"
          margin="dense"
          type="password"
        />
        <Button>Register</Button>
      </Form>
    </Container>
  )
}