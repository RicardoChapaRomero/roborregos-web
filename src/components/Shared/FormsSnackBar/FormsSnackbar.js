// @flow
import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

type Props = {
    message: string,
    severity: string,
    open_snackbar: boolean,
    handleClose: (MouseEvent, string) => void
};

function FormsSnackbar(props: Props) {
  const {
    message, severity, open_snackbar, handleClose,
  } = props

  return (
    <Snackbar
      open={open_snackbar}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={severity}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  )
}

export default FormsSnackbar
