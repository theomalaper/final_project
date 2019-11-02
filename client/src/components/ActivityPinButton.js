import React, { useState } from 'react'
import classNames from 'classnames'

export default function Button(props) {
  const [pinned, setPinned] = useState(false)

  let buttonClass = classNames('pin-button', {
    'pin-button-selected': pinned,
  })

  const pinActivity = event => {
    setPinned(!pinned)
    console.log(pinned)
    console.log(event.target)
    props.setCityTripActivity(event.target.id, pinned)
  }

  return (
    <button className={buttonClass} onClick={event => pinActivity(event)}><img id={props.activity_id} className="pin-icon hvr-grow" src={props.url} alt="Pin Icon"/></button>
  )
}