import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [btnColor, setBtnColor] = useState("primary");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setBtnColor("primary");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode is enabled", "success");
    } else {
      setMode("dark");
      setBtnColor("info");
      document.body.style.backgroundColor = "#1B2430";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled", "success");
    }
  };

  return (
    <div className="app">
      <Header title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/"
          element={
            <div className="container my-3">
              <TextForm
                showAlert={showAlert}
                heading="Enter Text to analyze"
                mode={mode}
                btnColor={btnColor}
              />
            </div>
          }
        ></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
