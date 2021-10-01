import React from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar,
} from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import { blue, green, pink, yellow } from '@material-ui/core/colors'

const useStyles = makeStyles({
  sade: {
    backgroundColor: (note) => {
      if (note.category == 'work') {
        return yellow[700]
      }
      if (note.category == 'money') {
        return green[500]
      }
      if (note.category == 'todos') {
        return pink[500]
      }
      return blue[500]
    },
  },
})
const NoteCard = ({ title, details, category, id, deleteNote }) => {
  console.log(category)
  const classes = useStyles({ category })
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.sade}>
              {category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => deleteNote(id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={title}
          subheader={category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default NoteCard
