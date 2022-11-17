import React from 'react'
import './TodoItem.css'

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <input type="checkbox" name="" id="" />
      <p>{props.text}</p>
      <i class="fa fa-trash" aria-hidden="true"></i>
    </li>
  )
}

export { TodoItem };