import React from 'react'
import { TextField, TextFieldProps } from '@material-ui/core'
import { InputAdornment, SvgIconTypeMap } from '@material-ui/core'

interface iTextField {
  type?: string
  margin?: any
  icon?: SvgIconTypeMap
}

export default function TextFieldComponent(props: TextFieldProps, extraProps: iTextField) {

  return (
    <TextField
      type={extraProps.type}
      margin={extraProps.margin}
      inputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {extraProps.icon}
          </InputAdornment>
        )
      }}
      {...props}
    >
    </TextField>
  )
}