import React, { useState } from 'react'
import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

interface iSnackMsg {
  message: string
  duration: number
  severity?: "success" | "info" | "warning" | "error" | undefined

}
export default function Component(props: iSnackMsg) {

  const [statusMsg, setStatusMsg] = useState(false)

  return (
    <Snackbar
      open={statusMsg}
      autoHideDuration={props.duration}
      onClose={() => setStatusMsg(false)}>
      <Alert
        variant="filled"
        severity={props.severity}
      >
        Test
      </Alert>
    </Snackbar>
  )
}