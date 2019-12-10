import React, {Component} from 'react';
import { Link } from 'react-router-dom';
const navStyle = {
    color:'rgb(83, 83, 83)'
};
class Nav extends Component{
    
    render(){
        return (
           <nav>
               <ul className="nav-links">
               <Link style={navStyle} to='/Home'>
               <li> Home </li>
               </Link>
               <Link style={navStyle} to='/Article'>
               <li> Article </li>
               </Link>
               <Link style={navStyle} to='/Story'>
               <li> Story </li>
               </Link>
               <Link style={navStyle} to='/BookMark'>
               <li> BookMark </li>
               </Link>
               <Link style={navStyle} to='/Login'>
               <li> Login </li>
               </Link>
               <Link style={navStyle} to='/Register'>
               <li> Register </li>
               </Link>
               </ul>
           </nav>
        )
    }
}
export default Nav; 
