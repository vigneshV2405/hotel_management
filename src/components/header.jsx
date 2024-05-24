import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <Link className="navbar-brand" to="/">Hotels</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/about">About</Link>
          <Link className="nav-item nav-link" to="/features">Features</Link>
          <Link className="nav-item nav-link" to="#">Pricing</Link>
          <Link className="nav-item nav-link disabled" to="#">Disabled</Link>
          <Link className='nav-item nav-link' to='/admin/login'>Admin Dashboard</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header