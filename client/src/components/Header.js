import React from "react";
import logo from "./assets/logo.svg";
function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-sm-8">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about"
                >
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/events">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="/schedule"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
