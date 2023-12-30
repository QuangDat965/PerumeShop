import React from 'react'

export const Navbar = () => {
  return (
    <div>  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    {/* Container wrapper */}
    <div className="container justify-content-center justify-content-md-between">
      {/* Left links */}
      <ul className="navbar-nav flex-row">
        <li className="nav-item me-2 me-lg-0">
          <a className="nav-link" href="#" role="button" data-mdb-toggle="sidenav" data-mdb-target="#sidenav-1" aria-controls="#sidenav-1" aria-haspopup="true">
            <i className="fas fa-bars me-1" />
            <span>Categories</span>
          </a>
        </li>
        <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <a className="nav-link" href="#">Bestsellers</a>
        </li>
        <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <a className="nav-link" href="#">Inspirations</a>
        </li>
        <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      {/* Left links */}
    
    </div>
    {/* Container wrapper */}
  </nav></div>
  )
}
