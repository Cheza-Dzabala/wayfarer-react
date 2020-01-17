import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom';
import Signin from './views/Signin';
import Notfound from './views/NotFound';

class App extends Component {

  Login = () => {
    return <h1>Login</h1>
  }
  render() {
    console.log(this.props);
    return (
      <Switch>
        <Route path="/login" >
          <Signin />
        </Route>
        <Route path="*">
          <Notfound />
        </Route>
      </Switch>
    )
  }
}

export default withRouter(App);
