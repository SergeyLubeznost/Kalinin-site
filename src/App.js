import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Link,
} from "react-router-dom";

function Root() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Link to="cont"><button>cont</button></Link>
    </div>
  );
}

export default Root;
