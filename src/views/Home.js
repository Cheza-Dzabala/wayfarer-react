import React, { Component } from 'react'
import Nav from './../components/Nav';
import Trips from '../components/Trips';

export default class Home extends Component {
  render() {
    return (
      <main>
        <div className="my-container">
          <section className="showcase">
            <div className="nav-container">
              <div className="logo"><a href="#">Way Farer <span id="welcome"></span></a></div>
              <Nav data-test="nav" />
            </div>
            <aside className="card search-card">
              <h1>Filter through trips</h1>
              <form action="" className="auth-form">
                <span className="form-inputs">
                  <select name="origin" className="filter-trip-select">
                    <option value=""> Please select your origin </option>
                    <option value=""> Blantyre </option>
                    <option value=""> Lilongwe </option>
                    <option value=""> Mzuzu </option>
                  </select>
                  <select name="destination" id="destination" className="filter-trip-select">
                    <option value="">Please select your destination</option>
                    <option value=""> Thyolo </option>
                    <option value=""> Bangwe </option>
                    <option value=""> Chintheche </option>
                  </select>
                  <input className="search-date" type="date" name="date" id="date" />
                </span>
                <button href="#" className="btn">Filter</button>
              </form>
            </aside>
          </section>
          <section className="trips">
            <div className="section-title">
              <h2>Blantyre Trips</h2>
            </div>
            <div className="trip-section">
              <Trips />
            </div>
          </section>
        </div>
      </main>
    )
  }
}
