import React from "react";
import logo from "./assets/lotus.jpg";
import { NavLink } from "react-router-dom";
import "../scss/custom.scss";
function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary m-3 p-3">
        <div className="container-fluid">
          <a className="navbar-brand float-start" href="/">
            <img
              src={logo}
              className="rounded-circle"
              alt="logo"
              height="150"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse float-end" id="navbarNav">
            <ul className="navbar-nav fs-3">
              <li className="nav-item p-3">
                <NavLink className="text-white" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink className="text-white" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink className="text-white" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink className="text-white" to="/events">
                  Events
                </NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink className="text-white" to="/schedule">
                  Schedule
                </NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink className="text-white" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
