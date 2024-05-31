import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Admindashboard() {
    useEffect(()=>{
        document.title = 'Admin Dashboard'
    },[])
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <b className="navbar-brand">Admin dashboard</b>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                click here for more actions
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/admin/dashboard/addhotel">Add Hotel</Link></li>
                                <li><Link className="dropdown-item" to="/admin/dashboard/edithotel">Edit Hotel</Link></li>
                                <li><Link className="dropdown-item" to="/admin/dashboard/deletehotel">Delete Hotel</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Admindashboard