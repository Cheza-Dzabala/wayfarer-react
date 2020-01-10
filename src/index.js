import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/styles.css';

const Index = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

ReactDOM.render(<Index />, document.getElementById("index"));