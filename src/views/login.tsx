import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Email, Lock } from '@material-ui/icons'
import { InputAdornment, Snackbar } from '@material-ui/core'
import { Button, TextField, SnackMsg } from '../components'
import { Alert } from '@material-ui/lab'
import db from '../database/connection'

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
  @media (max-width: 400px) {
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

export default function Component({ setRegister }: iProps) {

  //properties
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [snackMsg, settsnackMsg] = useState(true)

  //methods
  const auth = async () => {
    try {
      if (email && password) {
        const result = await db.post('users/login', { email, password })
        console.log(result.status);

        result.status === 200
          ?
          settsnackMsg(true)
          :
          settsnackMsg(false)
      }

    } catch (error) {
      settsnackMsg(true)
    }
  }

  const handleMsg = () => settsnackMsg(!snackMsg)

  return (
    <ContainerStyled>
      <FormStyled >

        <TitleStyled>D-A-S-H</TitleStyled>

        <SnackMsg
          duration={4000}
          message="Logged in!!!"
        />
        {/* <Snackbar open={snackMsg} autoHideDuration={4000} onClose={() => handleMsg()}>
          <Alert
            variant="filled"
            severity="success">
            Logged in!
          </Alert>
        </Snackbar> */}

        <TextField
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
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
          onChange={(e) => setPassword(e.target.value)}
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

        <Button
          type="submit"
          label="Login"
          onClick={() => auth()}
        />

        <SpanStyled onClick={() => setRegister(true)} >
          Don`t have an account? Sing up!
        </SpanStyled>

      </FormStyled>
    </ContainerStyled>
  )
}