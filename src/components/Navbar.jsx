import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../images/rightChoice.png"

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <img src={img1} style={{width:'8rem', height:'4rem', borderRadius:'40px'}} alt="img" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="ps-4 nav-link active" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/AboutUs">AboutUs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Carrer">Career</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/ContactUs">ContactUs</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
