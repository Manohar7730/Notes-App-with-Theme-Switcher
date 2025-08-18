import React from 'react'
import './NoteItem.css'

export default function NoteItem(props) {
    const { title, content } = props;
  return (
    <div className='note-item'>
      <div className='note-content'>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>x
      <div className='controls'>
        <button>✏️</button>
        <button>❌</button>
      </div>
    </div>
  )
}
