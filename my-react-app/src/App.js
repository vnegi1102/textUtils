import React, { useState } from "react";
import Transform from "./components/Transform";
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls) => {
    removeBodyClasses()
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing";

      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now";

      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";

    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <div className="container my-3" >
          <Routes>
            <Route path="/about"element={<About mode={mode}/>} >
            </Route>
            <Route path="/" element={
              <Transform
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter Character Counter, Clear text"
                mode={mode}
              />
            }>
              {/* <Transform showAlert={showAlert} heading="Enter The text To Analyze Below" mode={mode} /> */}
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}
export default App;



