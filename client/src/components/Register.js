import React from "react"

export default function Register() {
  return (
  <form className="register-form">
    <img src="https://image.flaticon.com/icons/svg/2170/2170091.svg" alt="Register picture"/>
    <h3>Sign Up For An Account</h3>

    <div className="name-register-input">
      <img src="https://image.flaticon.com/icons/svg/747/747376.svg" alt="Register Name"/>
      <input
        name='first_name'
        type='text'
        placeholder='First Name'
        // value={this.state.username}
        // onChange={this.handleChange}
      />
      <input
        name='last_name'
        type='text'
        placeholder='Last Name'
        // value={this.state.username}
        // onChange={this.handleChange}
      />
    </div>

    <div className="email-register-input">
      <img src="https://image.flaticon.com/icons/svg/126/126516.svg" alt="Register Name"/>
      <input
        name='last_name'
        type='email'
        placeholder='123@gmail.com'
        // value={this.state.username}
        // onChange={this.handleChange}
      />
    </div>

    <div className="password-register-input">
      <img src="https://image.flaticon.com/icons/svg/1000/1000966.svg" alt="Register Name"/>
      <input
        type='password'
        name='password'
        placeholder='Password'
        // value={this.state.password}
        // onChange={this.handleChange}
      /><br/>
    </div>

    <button className="register-submit" type='submit'><img src="https://i.imgur.com/14zb1XA.png" alt="Register Submit"/></button>
  </form>
  );
}