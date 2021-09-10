import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IconButton } from '@material-ui/core'
import { Watch } from '@material-ui/icons'
import Modal from '../Modals/Modal'

const Timer = props => {
  const [openModal, setOpenModal] = useState(false)
  const [time, setTime] = useState(5)
  const { classes, callBack } = props
  const createCounter = () => setTimeout(callBack, time)
  return (
    <>
      <IconButton
        className={classes.button}
        aria-label="Timer"
        onClick={() => setOpenModal(true)}
      >
        <Watch />
      </IconButton>
      <Modal
        title="Crear un temporizador"
        open={openModal}
        setOpen={setOpenModal}
        callBack={() => createCounter()}
      />
    </>
  )
}

Timer.propTypes = {
  classes: PropTypes.object.isRequired,
  callBack: PropTypes.func.isRequired,
}

export default Timer
