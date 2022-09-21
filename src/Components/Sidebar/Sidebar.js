import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './sidebar.css'

function Sidebar() {
  
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='navbar'>
      <section className='navbar-title'>Navbar</section>
      <div className={sidebar ? "sidebar on" : "sidebar"}>
        <h2>Menu</h2>
        <button className="menu" type="button" onClick={showSidebar}><div></div></button>
        <ul onClick={showSidebar}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </div>
    </div>
    
  )
}

export default Sidebar