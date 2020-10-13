import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const ButtonStyled = styled(Button)({
  textTransform: "capitalize",
  backgroundColor: "#41179c",
  color: "whitesmoke",
  '&:hover': {
    backgroundColor: "#463c52ba",
  }
})

interface iButton {
  label: string
  onClick?: any
  type?: "submit" | "button" | "reset"
}

export default function Component(props: iButton) {

  return (
    <ButtonStyled
      type={props.type}
      variant="contained"
      onClick={props.onClick}
    >
      {props.label}
    </ButtonStyled>
  )
}