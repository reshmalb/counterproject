import React from "react";
import './Login.css'
import {useDispatch} from 'react-redux'
import { authActions } from "../store/reduxfile";

const Login=()=>{
    const dispatch=useDispatch();


const loginHandler=()=>{
    dispatch(authActions.login())

}

    return(
    <div className="container" >  
    <form class="login-form" onsubmit={loginHandler}>
      <label for="email">Email:</label>
       <input type="email" id="email" name="email" required/>
          <label for="password">Password:</label>
         <input type="password" id="password" name="password" required/>
          <button type="submit">Log in</button>
     </form>
     </div> 
        
        )
}

export default Login;