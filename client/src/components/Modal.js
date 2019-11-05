import React from 'react';
import { Modal } from 'react-bootstrap';
import Register from './Register';
import Login from './Login';

const LOGIN = 'LOGIN'
const REGISTER = 'REGISTER'

export default function MyVerticallyCenteredModal(props) {
  const switchMode = (mode, props) => {
    props.setShow(mode)
    props.setFirstName("")
    props.setLastName("")
    props.setEmail("")
    props.setPassword("")
  }

  return (
    <div className="register-login-modal">
       <Modal
      {...props}
      centered
      centereddialogClassName="modal-50w"
      aria-labelledby="example-custom-modal-styling-title"
      >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <button className="modal-register-button" onClick={() => switchMode(REGISTER, props)}>REGISTER</button>
          /
          <button className="modal-login-button" onClick={() => switchMode(LOGIN, props)}>LOGIN</button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
        {props.anotherShow === REGISTER && (
          <Register 
            firstName={props.firstName} 
            setFirstName={props.setFirstName}
            lastName={props.lastName}
            setLastName={props.setLastName}
            email={props.email}
            setEmail={props.setEmail}
            password={props.password}
            setPassword={props.setPassword}
            registerUser={props.registerUser}
            setModalShow={props.setModalShow}
          />
        )}
        {props.anotherShow === LOGIN && (
          <Login
            email={props.email}
            setEmail={props.setEmail}
            password={props.password}
            setPassword={props.setPassword}
            loginUser={props.loginUser}
            setModalShow={props.setModalShow}
          />
        )}
        </div>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  </div>
  );
}