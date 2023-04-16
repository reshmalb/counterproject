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
        <nav className="navbar">
          <div className="navbar-brand">Redux Auth</div>
          {isAuth &&  (<ul className="navbar-links">
           <li><a href="#products">MyProducts</a></li>          
            <li><a href="#sales">MySales</a></li>
           <li><button  onClick={logoutHandler}>Logout</button></li>
          </ul>)}
        </nav>
      </header>
      
    )

}

export default Header;