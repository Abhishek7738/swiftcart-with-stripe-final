import React from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <div className="logo-right">
          <div className="logo">
            <img src="/swiftcart_logo1.png" alt="" /> SwiftCart
          </div>
        </div>

        <div className="nav-left">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="search new arrivals"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul>
              <li>
                <NavLink to="/" className={"btn btn-warning"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/sell" className={"btn btn-warning"}>
                  Sell
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className={"btn btn-warning"}>
                  My Cart
                </NavLink>
              </li>
              <li>
                {isAuthenticated ? (
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className={"btn btn-outline-warning"}>
                    Logout
                  </button>
                ) : (
                  <NavLink
                    onClick={() => loginWithRedirect()}
                    className={"btn btn-warning"}>
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
