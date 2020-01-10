import React, { Component } from 'react'

export default class Signin extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const { target: { name, value } } = e;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  login = (e) => {
    e.preventDefault();
    const {
      email, password
    } = this.state;

    console.log(this.state);
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <div id="auth-background">
          <div id="welcome-message">
            <h1>Way Farer</h1>
            <p>a better way to travel</p>
          </div>
          <div className="card auth-card">
            <h1>Login</h1>
            <form onSubmit={this.login} className="auth-form" id="login-form">
              <div id="authMessageContainer">
              </div>
              <input type="email" value={email} name="email" id="email" placeholder="Email..." onChange={(e) => this.handleChange(e)} data-test="email" />
              <input type="password" value={password} name="password" id="password" placeholder="Password..." onChange={(e) => this.handleChange(e)} data-test="password" />
              <button type="submit" href="#" className="btn">Login</button>
            </form>
            <div className="form-links">
              <a href="#" className=" form-link">Sign Up Instead</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
