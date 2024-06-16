import React from 'react'
import { Link , NavLink } from 'react-router-dom';
import { useState } from 'react';
import './header.css'

function Header() {
  const [ menuOpened , setMenuopened ] = useState(false)

  return (
    <nav className='navbar' >
        <Link className='title' to='/' >Website Name</Link>
        <div className='menu' onClick={()=>{setMenuopened(!menuOpened)}} >
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpened?'open':''} >
            <li>
                <NavLink to='/about' >About</NavLink>
            </li>
            <li>
                <NavLink to='/search'>Search</NavLink>
            </li>
            <li>
                <NavLink to='/admin/dashboard'>Admin dashboard</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Header