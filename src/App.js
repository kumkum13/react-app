 //import { BrowserRouter } from 'react-router-dom';
import './App.css';
//import  About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

{/*import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";*/}


 function App() {
  const [mode , setMode]= useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type)=>{
     setAlert({
      msg: message,
      type: type
     })
     setTimeout(() => {
      setAlert(null);
     }, 3000);
  }

 const toggleMode= ()=>{
      if(mode === 'light'){
        setMode ('dark');
        document.body.style.backgroundColor=' grey';
        showAlert("Dark Mode has been enabled" , "success");
      }
      else{
        setMode ('light');
        document.body.style.backgroundColor=' white';
        showAlert("Light Mode has been enabled" , "success");
      }
  }
     return (
      <>
     {/*<BrowserRouter>*/}
        <Navbar  title = "TextUtils" home = "Home" mode={ mode}  toggleMode ={toggleMode}/>
         <Alert alert={alert}/>
        <div className="container my-3">
       {/* <Routes>*/}
         {/* <Route exact path="/about"  element = {<About />}/>*/}
            
           
          {/*<Route exact path="/" element = {*/}
          <TextForm showAlert={showAlert} heading="Entre the text to analyse below" mode={ mode}/>
          {/*} />*/}
            
        {/*</Routes>*/}
         </div>
       {/* </BrowserRouter>*/}
        
      </>

     );
 }

 export default App;