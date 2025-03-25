import { useState } from 'react'
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className="navbar bg-body-tertiary fixed-top" style={{height:"100px"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Online auction Platform</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Online Auction Platform</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
          <Link className="nav-link" to="/Signup">Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Signin">Signin</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Biditem">Bid Item</Link>
        </li>
          </ul>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar