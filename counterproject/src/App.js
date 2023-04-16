import React, { Fragment } from "react";

import CounterForm from "./components/CounterForm";
import Login from "./Layout/Login";
import Header from "./Layout/Header";
import { useSelector } from 'react-redux';



function App() {
  const isAuth=useSelector(state=> state.auth.isAuthenticated)
  return (
    <Fragment>
      <Header/>
     {!isAuth &&<Login/>}
     {isAuth&& <CounterForm/>}
    </Fragment>


  );
}

export default App;
