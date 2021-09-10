import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  withStyles,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Avatar,
  IconButton,
  Switch,
} from '@material-ui/core'
import { Folder, CalendarToday, Timer as TimerIcon } from '@material-ui/icons'
import Timer from './Timer'

const styles = theme => ({
  item: {
    backgroundColor: 'white',
    minHeight: 65,
    margin: `${theme.spacing.unit}px 0 0`,
  },
})

const fixGpio = gpio => (gpio < 10 ? `0${gpio}` : gpio)

const Sensor = props => {
  const [enable, setEnable] = useState(false)

  const handleSwitch = gpio => {
    const url = `http://192.168.0.155:5000/api/turnOnRelay?gpio=${fixGpio(
      gpio,
    )}`

    fetch(url)
      .then(response => {
        setEnable(!enable)
        console.log('response', response)
      })
      .catch(e => console.log(e))
  }
  const { classes, item } = props
  return (
    <ListItem button className={classes.item}>
      <ListItemAvatar>
        <Avatar>
          <Folder />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.name} secondary={item.desc} />
      <ListItemSecondaryAction>
        <IconButton className={classes.button} aria-label="Calendar">
          <CalendarToday />
        </IconButton>
        <IconButton className={classes.button} aria-label="Timer">
          <TimerIcon />
        </IconButton>
        <Timer callBack={() => console.log('Timerrr')} {...props} />
        <Switch onChange={() => handleSwitch(item.gpio)} checked={enable} />
      </ListItemSecondaryAction>
    </ListItem>
  )
}

Sensor.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
}

export default withStyles(styles)(Sensor)
