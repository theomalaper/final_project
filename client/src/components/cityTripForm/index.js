import React, { useState } from 'react'
import Show from './Show'
import Form from './Form'
import Confirm from './Confirm'
import useVisualMode from '../../hooks/useVisualMode'

const SHOW = 'SHOW'
const FORM = 'FORM'
const CONFIRM = 'CONFIRM'

export default function CityTripForm() {
  const { mode, transition, back } = useVisualMode(SHOW)
  const [days, setDays] = useState(1)
  const [accommodation, setAccommodation] = useState(0)
  const [transport, setTransport] = useState(0)

  return (
    <div className="city-trip-form">
      {mode === SHOW && (
        <Show 
          onAdd={() => transition(FORM)} 
          onFinish={() => transition(CONFIRM)} 
        />
      )}
      {mode === FORM &&  (
        <Form 
          cancel={() => back()} 
          setDays={setDays}
          days={days}
          transport={transport}
          setTransport={setTransport}
          accommodation={accommodation}
          setAccommodation={setAccommodation}
        />
      )}
      {mode === CONFIRM && (
        <Confirm 
          cancel={() => back()}
        />
      )}
    </div>
  )
}
