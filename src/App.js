import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    )
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has bee enabled", "success")
      document.title = "TextUtils - DarkMode"

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has bee enabled", "success")
      document.title = "TextUtils - LightMode"
    }

  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter The text to analyze below" mode={mode} />
        {/* <Router>
          <Routes>
            <Route path='/' element={<Textform showAlert={showAlert} heading="TextUitls - Word Counter, Character Counter, Remove extra spaces" mode={mode} />}>
            </Route>
            <Route path="/about" element={<About mode={mode} />}>
            </Route>
          </Routes>
        </Router> */}
      </div>

    </>
  )
}


export default App;
