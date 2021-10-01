import React, { useState } from 'react'
import { notes } from '../data/data'
import { Container } from '@material-ui/core'
import NoteCard from '../components/NoteCard'
import Masonry from 'react-masonry-css'
export default function Notes() {
  const [noteList, setNoteList] = useState(notes)

  const deleteNote = (id) => {
    const filterList = noteList.filter((item) => item.id !== id)
    setNoteList(filterList)
  }
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  }
  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {noteList.map((note) => (
          <div key={note.id}>
            <NoteCard {...note} deleteNote={deleteNote} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
