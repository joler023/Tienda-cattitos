import React, { useState, useEffect } from "react";
import Routes from './routes/routes'
import { BrowserRouter as Router } from "react-router-dom";
import AuthApi from "./utils/AuthAPI";
import {hasSignned} from '../src/components/auth-api'
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [auth, setAuth] = useState(false);
  const readSession = async()=>{
    const res = await hasSignned();
    if(res.data.auth){
      setAuth(true)
    }
  }
  useEffect(()=>{
    readSession()
  },[])

  return (
    <div>
     <AuthApi.Provider value={{auth, setAuth}}>
      <Router>
        <Routes></Routes>
      </Router>
    </AuthApi.Provider>
    </div>
  );
};

export default App;
