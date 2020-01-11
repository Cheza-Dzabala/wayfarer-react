import React, { Component } from 'react';
import { loginAction } from './../actions/authActions';
import { connect } from 'react-redux';
import { UncontrolledAlert, Spinner, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class Signup extends Component {

  state = {
    email: '',
    password: '',
    isLoading: false
  }

  toggleLoad = async () => {
    await this.setState({
      isLoading: !this.state.isLoading
    });
  }
  handleChange = (e) => {
    const { target: { name, value } } = e;
    this.setState({
      [name]: value
    });
  }

  login = async (e) => {
    e.preventDefault();
    await this.toggleLoad();

    const { loginAction } = this.props;

    const {
      email, password
    } = this.state;

    const credentials = {
      email,
      password
    }

    //  await loginAction(credentials);
    //  await this.toggleLoad();
  }

  render() {
    const { email, password, isLoading } = this.state;
    console.log(this.state);
    const { status } = this.props;
    return (
      <div className="my-container fluid">
        <div id="auth-background">
          <div id="welcome-message">
            <h1>Way Farer</h1>
            <p>a better way to travel</p>
          </div>
          <div className="card auth-card">
            <h1>Sign Up</h1>
            {
              (isLoading) ? <Row className="centered-row">
                <Spinner type="grow" color="primary" />
              </Row> : ''
            }
            <form onSubmit={this.login} className="auth-form" id="login-form">
              {
                (status === 'error') ? <div id="authMessageContainer">
                  <UncontrolledAlert color="danger">
                    I am an alert and I can be dismissed!
                 </UncontrolledAlert>
                </div> : ''
              }
              <input type="email" name="email" placeholder="Email..." />
              <input type="text" name="first_name" placeholder="First Name..." />
              <input type="text" name="last_name" placeholder="Last Name..." />
              <input type="password" name="password" placeholder="Password..." />
              <input type="password" name="confirm_password" placeholder="Confirm Password..." />
              <button href="#" className="btn"> {(isLoading) ? <Spinner type="grow" color="primary" /> : ''} Create Account</button>
            </form>
            <div className="form-links">
              <Link to="/login" className=" form-link">Sign In Instead</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  authStatus: state.auth.status,
  data: state.auth.data,
  error: state.auth.error,
  status: state.auth.status
})

export default connect(mapStateToProps, { loginAction })(Signup)