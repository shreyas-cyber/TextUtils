/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#25464c";
      showAlert("Dark mode has been enabled", "success")
      // document.title = "TextUtils-Dark Mode"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
      // document.title = "TextUtils-Light Mode"
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtilsBlog" aboutText="About Us"/> */}
      <Router>
        <Navbar title="TextUtilsBlog" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Try TextUtils- word counter, character counter, copy text" mode={mode} />
          </Route>
        </Switch>
        <div className="container my-3">
        </div>
      </Router>
    </>
  );
}

export default App;
