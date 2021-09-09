import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";
import ProgressBar from "../ProgressBar/ProgressBar";

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <link
        href="https://allfont.net/allfont.css?fonts=oswald-stencil-bold"
        rel="stylesheet"
        type="text/css"
      />
      <Link to="/home">
        <h2 className="nav-title">100 Year Manifesto</h2>
      </Link>
      <ProgressBar />
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/homepage">
              My Library
            </Link>
            <Link className="navLink" to="/myManifesto">
              My Manifesto
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
