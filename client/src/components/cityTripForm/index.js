import React, { useState } from 'react'
import Show from './Show'
import Form from './Form'
import Confirm from './Confirm'
import Finalize from './Finalize'
import useVisualMode from '../../hooks/useVisualMode'

const SHOW = 'SHOW'
const FORM = 'FORM'
const FINALIZE ='FINALIZE'

export default function CityTripForm(props) {
  const { mode, transition, back } = useVisualMode(SHOW)
  const [days, setDays] = useState(1)
  const [accommodation, setAccommodation] = useState(0)
  const [transport, setTransport] = useState(0)
  const [tripName, setTripName] = useState("")

  return (
    <div className="city-trip-form">
      {mode === SHOW && (
        <Show 
          onAdd={() => transition(FORM)} 
          onFinish={() => transition(FINALIZE)} 
          nextCity={() => props.nextCity()}
        />
      )}
      {mode === FORM &&  (
        <Form 
          cancel={() => back()} 
          save={() => props.submitCityTrip(accommodation, transport, days)}
          setDays={setDays}
          days={days}
          transport={transport}
          setTransport={setTransport}
          accommodation={accommodation}
          setAccommodation={setAccommodation}
        />
      )}
      {mode === FINALIZE && (
        <Finalize
          cancel={() => back()}
          tripName={tripName}
          setTripName={setTripName}
          finalizeTrip={() => props.finalizeTrip(tripName)}
        />
      )}
    </div>
  )
}
