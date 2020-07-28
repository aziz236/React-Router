import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
function Nav() {
    return (
       <nav className="navNav">
           <h>React router</h>
           <ul className="navLinks">
               <Link className="navLink" to='/'>  <li>Home Page</li>  </Link>
               <Link className="navLink" to="/category">  <li>Category</li>  </Link>
               <Link className="navLink" to="/product">  <li>Products</li>  </Link>
               <Link className="navLink" to="/admin">  <li>Admin area</li>  </Link>
           </ul>
       </nav>
    )
}
export default Nav;