import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg  bg-dark text-white">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navbar brand */}
        <a className="navbar-brand mt-2 mt-lg-0" href="#">
          <img
            src="https://img.freepik.com/premium-vector/podcast-flat-icon_180786-8.jpg?w=2000"
            height={55}
            alt="Podcast Logo"
            loading="lazy"
          />
        </a>
        <h3>Podcast</h3>
        {/* Left links */}
        <ul className="navbar-nav ms-auto  me-5 mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link text-white" href="/">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="/register">
              Register
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/addpodcast">
              Add Podcast
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/listpodcast">
              List Podcast
            </Link>
          </li>
        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/*Right elements */}
      
      {/* Right elements
    </div>
    {/* Container wrapper */}
  {/* Navbar */}
</div>
</nav>
</>
)}
export default Header;
