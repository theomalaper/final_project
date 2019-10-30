import React from 'react'
import Show from './Show'
import Form from './Form'
import Confirm from './Confirm'
import useVisualMode from '../../hooks/useVisualMode'

const SHOW = 'SHOW'
const FORM = 'FORM'
const CONFIRM = 'CONFIRM'

export default function CityTripForm() {
  const { mode, transition, back } = useVisualMode(SHOW)

  return (
    <div>
      {mode === SHOW && (
        <Show 
          onAdd={() => transition(FORM)} 
          onFinish={() => transition(CONFIRM)} 
        />
      )}
      {mode === FORM &&  (
        <Form 
          onCancel={() => back()} 
        />
      )}
      {mode === CONFIRM && (
        <Confirm 
          onCancel={() => back()} 
        />
      )}
    </div>
  )
}
