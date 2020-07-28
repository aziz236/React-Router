import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

function AdminPage() {
    return (
        <div>
            
            <div className="adminBorder">
            <h>You must log in to view the page at /admin</h>
            <nav>
            <ul> 
                <Link to="/adminIsHere"><li className="textDecoration"><button className="loginButton">Login</button></li></Link>  
            </ul>
            </nav>
            </div>

        </div>
    )
}
export default AdminPage;