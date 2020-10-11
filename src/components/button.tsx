import React from 'react'
import { styled } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

interface iButton {
  label: string
}

const ButtonSC = styled(Button)({
  textTransform: "capitalize",
  backgroundColor: "#41179c",
  color: "whitesmoke",
  '&:hover': {
    backgroundColor: "#463c52ba",
  }
})

export default function ButtonComponent(props: iButton) {

  return (
    <ButtonSC variant="contained">{props.label}</ButtonSC>
  )
}