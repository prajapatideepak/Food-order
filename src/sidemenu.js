import React from 'react'
import {
  Link
} from "react-router-dom";
export default function SideMenu() {
  return (
      
<div>
    <div className='sidebar'>
        <ul>
            <li>
             <Link to="/">
               Home
             </Link> 
            </li>
            <li>
                <Link to="/menu">
                 Menu
                </Link>
            </li>
        </ul>
    
</div>
   
    </div>
   
  )
}
