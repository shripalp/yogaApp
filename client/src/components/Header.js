import React from "react";
import logo from "./assets/lotus.jpg";
import { NavLink } from "react-router-dom";
import "../scss/custom.scss";
function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary m-3 p-3">
        <div className="container-fluid" id="header">
          <a className="navbar-brand float-start w-25" href="/">
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item p-3">
                <NavLink className="navLinks" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink className="navLinks" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink className="navLinks" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink className="navLinks" to="/events">
                  Events
                </NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink className="navLinks" to="/schedule">
                  Schedule
                </NavLink>
              </li>
              <li className="nav-item p-3">
                <NavLink className="navLinks" to="/login">
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
