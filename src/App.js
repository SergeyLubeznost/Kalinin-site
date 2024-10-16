import React from 'react';
import './App.css';
import Header from "./components/header/header"
import Main from "./pages/main/main"
// import {
//   Link,
// } from "react-router-dom";

function Root() {
  return (
   <>
    <Header/>
    <Main/>
   </>
  )
}

export default Root;
