import React, { useState } from 'react'
import {
  Typography,
  Button,
  Container,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  FormControl,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  // textColor: {
  //   backgroundColor: 'grey',
  //   '&:hover': {
  //     backgroundColor: 'blue',
  //   },
  // },
  field: {
    margintop: 20,
    marginBottom: 20,
    display: 'block',
  },
})
export default function Create() {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [catergory, setCategory] = useState('work')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)
    if (!title) {
      setTitleError(true)
    }

    if (!details) {
      setDetailsError(true)
    }
    if (title && details) {
      console.log(title, details, catergory)
    }
  }
  return (
    <Container>
      <Typography
        variant='h6'
        component='h2'
        gutterBottom
        color='textSecondary'
        className={classes.textColor}
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label='Note Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          className={classes.field}
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label='Details'
          variant='outlined'
          color='secondary'
          multiline
          rows={6}
          fullWidth
          required
          className={classes.field}
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Catergory</FormLabel>
          <RadioGroup
            value={catergory}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value='money' control={<Radio />} label='Money' />
            <FormControlLabel value='todos' control={<Radio />} label='Todos' />
            <FormControlLabel
              value='reminders'
              control={<Radio />}
              label='Reminders'
            />
            <FormControlLabel value='work' control={<Radio />} label='Work' />
          </RadioGroup>
        </FormControl>

        <Button type='submit' color='secondary' variant='contained'>
          Submit
        </Button>
      </form>
    </Container>
  )
}
