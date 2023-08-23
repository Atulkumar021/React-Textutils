
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import React, { useState } from "react";
import About from "./components/About"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
const App=()=> {
  const [mode, setmode] = useState("light");
  const[alert,setalert]=useState(null)
  const showalert=(message,type)=>{
          setalert({
            msg:message,
            type:type
          })
          setTimeout(() => {
             setalert(null)
          }, 1700);
  }
  const togglmode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor='#272829'
      showalert("Dark mode has been Enabled","success")
    } else {
      setmode("light");
      document.body.style.backgroundColor='white'
      showalert("light mode has been Enabled","success")
    }
  }
   
    return (
      <>
      <Router>
        <Navbar title=" TextUtils " mode={mode} togglmode={togglmode} />
        <Alert alert={alert}/>
        <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={ <About mode={mode}/>}>
           
          </Route>
          <Route  exact path="/" element={<Textform heading="Enter the text to analyze below" showalert={showalert}  mode={mode}/>}>          </Route>
        </Routes>
        </div>
        </Router>
      </>
    );
  };


export default App;
