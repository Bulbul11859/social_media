import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    let activeStyle = {
        textDecoration: "none",
        color:"black"
      };
    
      let activeClassName = "underline";

  return (
    <div>
       <nav>
          <ul>
            <li> <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Messages
          </NavLink>
          </li>

            <li> 
                <NavLink
            to="about"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            About
          </NavLink></li>
            <li>Contact</li>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
