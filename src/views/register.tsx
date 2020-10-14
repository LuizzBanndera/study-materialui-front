import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Button, TextField, SnackMsg } from '../components'
import db from '../database/connection'

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
  @media (max-width: 400px) {
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

  interface iData {
    first_name: string
    last_name: string
    email: string
    password: string
  }
  const [succesMsg, setSuccesMsg] = useState(false)
  const [data, setData] = useState<iData>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  })

  const createUser = async () => {
    try {
      if (data) {
        const result = await db.put('users/create', data)
        if (result.status === 200) {
          setSuccesMsg(true)
        }
      }
    } catch (error) {
    }
  }

  return (
    <ContainerStyled>
      <FormStyled onSubmit={(e) => e.preventDefault()}>

        <TitleStyled>Register yourself.</TitleStyled>

        <SnackMsg
          duration={4000}
          isOpen={succesMsg}
          message="Registered sucessfully!"
          onClose={() => setSuccesMsg(false)}
        />

        <TextField
          fullWidth
          variant="standard"
          label="First name"
          onChange={(e) => setData({ ...data, first_name: e.target.value })}
        />
        <TextField
          fullWidth
          variant="standard"
          label="Last name"
          onChange={(e) => setData({ ...data, last_name: e.target.value })}
        />
        <TextField
          fullWidth
          required
          type="email"
          variant="standard"
          label="E-mail"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <TextField
          fullWidth
          required
          type="password"
          variant="standard"
          label="Password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <Button
          type="submit"
          label="Register"
          onClick={() => createUser()}
        />

        <SpanStyled onClick={() => setRegister(false)} >
          Back to login.
        </SpanStyled>

      </FormStyled>
    </ContainerStyled>
  )
}