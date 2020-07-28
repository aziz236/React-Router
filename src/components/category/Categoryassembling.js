import React from 'react'
import {Link} from 'react-router-dom'

function categoryAssembling() {
    return (
        <div>
       <nav className="categoryNav">
           <ul className="Category-links-placement"> 
               <Link className="categoryNav" to="/shoes">  <li className="Category-links">Shoes</li>  </Link>
               <Link className="categoryNav" to="/boots">  <li className="Category-links">Boots</li>  </Link>
               <Link className="categoryNav" to="/footwear">  <li className="Category-links">Footwear</li>  </Link>
           </ul>
       </nav>
  
       </div>
    )
}
export default categoryAssembling;