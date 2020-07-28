import React from 'react'
import {Link} from 'react-router-dom'
import './Products.css'

function ProductsAssembling() {
    return (
        <div>
         <nav className="productsNav">
           <ul className="Products-links-placement"> 
               <Link className="productsNav" to="/nike">    <li className="Products-links">NIKE Liteforce Blue Sneakers</li>  </Link>
               <Link className="productsNav" to="/polo">    <li className="Products-links">U.S. POLO ASSN. Slippers</li>     </Link>
               <Link className="productsNav" to="/adidas">  <li className="Products-links">ADIDAS Adispree Running Shoes</li>     </Link>
               <Link className="productsNav" to="/cooper">  <li className="Products-links">Lee Cooper Mid Sneakers</li>  </Link>
           </ul>
         </nav>
  
       </div>
    )
}
export default ProductsAssembling;