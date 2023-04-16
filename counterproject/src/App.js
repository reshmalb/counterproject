import React, { Fragment } from "react";

import CounterForm from "./components/CounterForm";
import Login from "./Layout/Login";
import Header from "./Layout/Header";
import { useSelector } from 'react-redux';
import UserProfile from "./Layout/UserProfile";



function App() {
  const isAuth = useSelector((state)=> state.auth.isAuthenticated)

  console.log("is auth in app",isAuth);
  return (
    <Fragment>
      <Header/>
     {!isAuth && <Login/>}
     {isAuth && <UserProfile/>}
       <CounterForm/>
    </Fragment>


  );
}

export default App;
