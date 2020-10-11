import React from 'react'
import styled, { css } from 'styled-components'
import { Button, TextField } from '../components'

const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const ContainerSC = styled.div`
  ${flex};
`
const FormSC = styled.form`
  ${flex};
  height: 22rem;
  justify-content: space-between;
`
const TitleSC = styled.h3`
letter-spacing: 5px;
color: #373D3f;
font-size: 22px;
margin-top: 0;
`

export default function Register() {

  return (
    <ContainerSC>
      <FormSC>
        <TitleSC>Register yourself.</TitleSC>

        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="First name"
        />
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Last name"
        />
        <TextField
          fullWidth
          type="email"
          margin="dense"
          variant="outlined"
          label="E-mail"
        />
        <TextField
          fullWidth
          type="password"
          margin="dense"
          variant="outlined"
          label="Password"
        />

        <Button label="Register" />
      </FormSC>
    </ContainerSC>
  )
}