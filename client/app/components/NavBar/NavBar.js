import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import classNames from 'classnames'
import {
    withStyles, Drawer, AppBar, Toolbar, List, CssBaseline, Typography,
    Divider, IconButton, ListItem, ListItemIcon, ListItemText, Button,
    Link
} from '@material-ui/core'
import { Menu, ChevronLeft, ChevronRight, Home, Settings } from '@material-ui/icons'


const drawerWidth = 240

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    loginButton: {
        marginRight: 36,
    },
    loginButtonShifted: {
        marginRight: 12,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
})

const MyLink = props => <RouterLink to="/open-collective" {...props} />

class NavBar extends React.Component {
    state = {
        open: false,
    }

    handleDrawerOpen = () => {
        this.setState({ open: true })
    }

    handleDrawerClose = () => {
        this.setState({ open: false })
    }

    render() {
        const { classes, theme, children, title } = this.props
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                    })}
                >
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, {
                                [classes.hide]: this.state.open,
                            })}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap style={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                        <Button
                            color="inherit"
                            className={classNames(classes.loginButton, {
                                [classes.loginButtonShifted]: this.state.open,
                            })}
                        >
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: this.state.open,
                        [classes.drawerClose]: !this.state.open,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: this.state.open,
                            [classes.drawerClose]: !this.state.open,
                        }),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <Link component={RouterLink} to={"/"} style={{ textDecoration: 'none' }}>
                            <ListItem button key={"Home"}>
                                <ListItemIcon><Home /></ListItemIcon>
                                <ListItemText primary={"Home"} />
                            </ListItem>
                        </Link>
                    </List>
                    <Divider />
                    <List>
                        <Link component={RouterLink} to={"/settings"} style={{ textDecoration: 'none' }}>
                            <ListItem button key={"Settings"}>
                                <ListItemIcon><Settings /></ListItemIcon>
                                <ListItemText primary={"Settings"} />
                            </ListItem>
                        </Link>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {children}
                </main>
            </div>
        )
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    children: PropTypes.node,
}

export default withStyles(styles, { withTheme: true })(NavBar)