import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar (props) {
  const currUser = props.currentUser;

  let btn = "";
  if (currUser === null || currUser.userId === null) {
    btn = "Sign In";
  } else {
    btn = "Log out";
  }

  const nav = (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="../index">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="../gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="../profile">My Profile</Link>
            </li>
          </ul>

          <div className="nav-item">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-secondary me-2" type="submit">Search</button>
            </form>
          </div>
          <div className="nav-item me-2">
            <Link type="button" className="btn purple-btn text-white" to="../create-project">Upload Project</Link>
          </div>
          <div className="nav-item me-2">
            <Link id="sign-in" type="button" className="btn purple-btn text-white" to="../sign-in">{btn}</Link>
          </div>
        </div>
      </div>
    </nav>
  );

  return nav;
}