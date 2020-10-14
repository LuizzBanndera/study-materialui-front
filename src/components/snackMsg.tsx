import React from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

interface iSnackMsg {
  isOpen: boolean
  message: string
  duration: number
  onClose: Function
  severity?: "success" | "info" | "warning" | "error" | undefined
}

export default function Component(props: iSnackMsg) {

  return (
    <Snackbar
      open={props.isOpen}
      autoHideDuration={props.duration}
      onClose={() => props.onClose()}>
      <Alert
        variant="filled"
        severity={props.severity}
      >
        {props.message}
      </Alert>
    </Snackbar>
  )
}