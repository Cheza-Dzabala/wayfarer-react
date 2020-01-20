
import React from 'react'
import { Redirect } from 'react-router-dom';


const logout = () => {
  console.log('here')
  localStorage.clear();
  return <Redirect to="/login" />
}

export default function Nav() {
  return (
    <nav className="navigation" id="nav" data-test="navigation">
      <a href="">home</a>
      <a id="linkLogout" onClick={() => logout()}>logout</a>
      <a href="#">help</a>
    </nav>
  )
}
