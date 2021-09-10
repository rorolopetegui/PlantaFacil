import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

function Transition(props) {
  return <Slide direction="up" {...props} />
}

const MaxWidthDialog = props => {
  const handleClose = () => {
    props.setOpen(false)
  }

  const { title, children } = props

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={props.open}
      onClose={() => handleClose()}
      aria-labelledby="max-width-dialog-title"
      TransitionComponent={Transition}
    >
      <DialogTitle id="max-width-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()} color="secondary">
          Close
        </Button>
        <Button
          onClick={() => {
            props.callBack()
            handleClose()
          }}
          color="primary"
        >
          Aplicar
        </Button>
      </DialogActions>
    </Dialog>
  )
}

MaxWidthDialog.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  callBack: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
}

export default MaxWidthDialog
