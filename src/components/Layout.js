import { makeStyles } from '@material-ui/styles'
import React from 'react'
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar,
} from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons'
import { format } from 'date-fns'

const drawerWidth = 240
const useStyles = makeStyles({
  page: {
    backgroundColor: '#f9f9f9',
    width: ' 100%',
    padding: '24px',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  root: {
    display: 'flex',
  },
  active: {
    background: '#f4f4f4',
  },
  title: {
    padding: '16px',
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: '#fff',
  },
  toolbar: {
    marginTop: '100px',
    color: '#222',
  },
  titleUp: {
    color: '#222',
    flexGrow: 1,
  },
  user: {
    color: '#222',
  },
  avatar: {
    marginLeft: '16px',
  },
})
const Layout = ({ children }) => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlined color='secondary' />,
      path: '/create',
    },
  ]
  return (
    <div className={classes.root}>
      {/*app bar*/}
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.titleUp}>
            Today is {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography className={classes.user}>Mario</Typography>
          <Avatar src='/mario-av.png' className={classes.avatar} />
        </Toolbar>
      </AppBar>
      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant='h5' className={classes.title}>
            Aldins Note's
          </Typography>
        </div>
        {/*list / links */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
}

export default Layout
