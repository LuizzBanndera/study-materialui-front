import React from 'react'
import { TextField, TextFieldProps } from '@material-ui/core'

export default function TextFieldComponent(props: TextFieldProps) {

  return (
    <TextField
      {...props}
    />
  )
}