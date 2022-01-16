import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import sourabh from "./components/sourabh";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// because of deployment

function App() {
  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "textutills-lightMode";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode has been enabled", "success");
      document.title = "textutills-darkmode";
      // setInterval(() => {
      //   document.title="textutiils is amazing"
      // }, 2000);

      // setInterval(() => {
      //   document.title="intall it Now"
      // }, 5000  ,
      // );many appliactions enable this feature to catch users attention.
    }
  };

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState("");
  return (
    <>
      {/* <sourabh></sourabh> */}
      {/* <Router> */}
        <Navbar
          title="textuttils"
          aboutText="ABOUT"
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar>

        <Alert alert={alert}></Alert>

        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}></Route>
             */}
             {/* we uncommented it because we have to deploy this app on github and  */}
             {/* router does'nt work well with github pages. */}
            {/* <Route
              exact
              path="/"
              element={ */}
                <TextForm
                  heading="enter the text to analyze"
                  showAlert={showAlert}
                  mode={mode}
                ></TextForm>
              {/* }
            ></Route>
          </Routes> */}
        </div>
      {/* </Router> */}
      {/* <Navbar ></Navbar>    ,it is when we dont pass an argument and it goes away with default argument */}
    </>
  );
}
//THESE ARE MY IMP NOTES ,I MUST READ IT ONES I OPEN IT.
//from line 4-23 ,this is 'jsx'.in simple words,it is html ,who wore a mask of js.

//entire jsx of react must be wraped in one tag.it cannot return multiple tags.suppose if you wanna
//add some new tag ,so what you will do is :
//  <>
//   new tag
//   jsx code
//  </>
//this is the correct approach
//we have to use camal case in react
// html syntax are slightly changed in react:
//  htmlFor=htmlFor,className=className etc.

export default App;
