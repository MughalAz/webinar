import React from 'react'

export default function Navbar() {
  return (
    <div className='container pt-5'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="./assets/images/logo.png" className="img w-50" alt="..."/></a>
    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active mx-4" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="#">Event</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-4" href="#">Contact</a>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn-1 mx-4" type="submit">SIGN UP</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
