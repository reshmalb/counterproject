import React from "react";
import './Header.css'
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from "../store/reduxfile";


const Header=()=>{
   const isAuth=useSelector(state=>state.auth.isAuthenticated)
   const dispatch=useDispatch();

 const logoutHandler=()=>{
    dispatch(authActions.logout())

 }

    return(
        <header>
        <nav class="navbar">
          <div class="navbar-brand">Redux Auth</div>
          {isAuth&&  <ul class="navbar-links">
           <li><a href="#">MyProducts</a></li>
            <li><a href="#">MySales</a></li>
           <li><button  onClick={logoutHandler}>Logout</button></li>
          </ul>}
        </nav>
      </header>
      
    )

}

export default Header;