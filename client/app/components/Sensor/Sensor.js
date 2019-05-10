import React from 'react'
import PropTypes from 'prop-types'
import {
    withStyles, List, ListItem, ListItemAvatar, ListItemSecondaryAction,
    ListItemText, Avatar, IconButton, Grid, Typography, Switch, Icon
} from '@material-ui/core'
import { Folder, CalendarToday, Timer } from '@material-ui/icons'

const styles = theme => ({
    item: {
        backgroundColor: 'white',
        minHeight: 65,
        margin: `${theme.spacing.unit}px 0 0`,
    }
})

class InteractiveList extends React.Component {
    state = {
        switch: false,
    };
    handleSwitch = (gpio) => {
        this.setState({ switch: !this.state.switch });
        //fetch('/')
    }

    render() {
        const { classes, item } = this.props

        return (
            <ListItem button className={classes.item}>
                <ListItemAvatar>
                    <Avatar>
                        <Folder />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={item.name}
                    secondary={item.desc}
                />
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
        )
    }
}

InteractiveList.propTypes = {
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
}

export default withStyles(styles)(InteractiveList)
