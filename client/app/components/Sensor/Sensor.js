import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Avatar,
  IconButton,
  Switch,
} from '@material-ui/core';
import { Folder, CalendarToday, Timer } from '@material-ui/icons';

const styles = theme => ({
  item: {
    backgroundColor: 'white',
    minHeight: 65,
    margin: `${theme.spacing.unit}px 0 0`,
  },
});

const fixGpio = gpio => (gpio < 10 ? `0${gpio}` : gpio);

class InteractiveList extends React.Component {
  state = {
    switch: false,
  };

  handleSwitch = gpio => {
    this.setState({ switch: !this.state.switch });

    const url = `http://192.168.0.155:5000/api/turnOnRelay?gpio=${fixGpio(
      gpio,
    )}`;
    console.log('url', url);
    fetch(url)
      .then(response => {
        console.log('YAYYY', response);
      })
      .catch(e => console.log(e));
  };

  componentDidMount = () => {};

  render() {
    const { classes, item } = this.props;

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
            <Timer />
          </IconButton>
          <Switch
            onChange={this.handleSwitch.bind(this, item.gpio)}
            checked={this.state.switch}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveList);
