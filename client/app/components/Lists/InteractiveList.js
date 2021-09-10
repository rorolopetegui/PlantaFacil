import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, List, Grid, Typography } from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
  item: {
    backgroundColor: 'white',
    minHeight: 65,
    margin: `${theme.spacing.unit}px 0 0`,
  },
})

const InteractiveList = props => {
  const { classes, title, children } = props
  return (
    <div className={classes.root}>
      <Grid container spacing={0} justify="center">
        <Grid item md={8}>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <List>{children}</List>
        </Grid>
      </Grid>
    </div>
  )
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
}

export default withStyles(styles)(InteractiveList)
