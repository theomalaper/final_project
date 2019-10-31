import React from 'react'
import classNames from 'classnames'

export default function Button(props) {
  
  let buttonClass = classNames('list-button', {
    'list-button-selected': props.selected,
  })

  return (
    <button className={buttonClass} onClick={() => props.setChange(props.id)}><img src={props.url} alt={props.name}/></button>
  )
}