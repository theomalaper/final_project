import React from "react"

export default function Login(props) {
  const submitUser = event => {
    event.preventDefault()
    props.loginUser(props.email, props.password)
    props.setModalShow(false)
  }

  return (
<form className="login-form">
    <img src="https://image.flaticon.com/icons/svg/1000/1000946.svg" alt="Login picture"/>
    <h3>Login To Your Account</h3>

    <div className="email-login-input">
      <label>EMAIL</label>
      <input
        name='last_name'
        type='email'
        placeholder='123@gmail.com'
        value={props.email}
        onChange={event => props.setEmail(event.target.value)}
      /><br/>
    </div>

    <div className="password-login-input">
      <label>PASSWORD</label>
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={props.password}
        onChange={event => props.setPassword(event.target.value)}
      /><br/>
    </div>

    <button className="login-submit" onClick={event => submitUser(event)} type='submit'><img src="https://i.imgur.com/14zb1XA.png" alt="Login Submit"/></button>
  </form>
  );
}