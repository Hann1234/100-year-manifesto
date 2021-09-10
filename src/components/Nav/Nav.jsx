import React from "react";
import { Link, useHistory } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "../ProgressBar/ProgressBar";

import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import LogInButton from "../LoginButton/LoginButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Nav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();

  let loginLinkData = {
    path: "/login",
    text: "Login / Register",
  };

  if (user.id != null) {
    loginLinkData.path = "/user";
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(`Is handleClick for burger menu activating?`, event);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const resetReducer = () => {
    dispatch({ type: "CLEAR_NEXT_BUTTON"})
  }

  return (
    <div className="nav">
      <link
        href="https://allfont.net/allfont.css?fonts=oswald-stencil-bold"
        rel="stylesheet"
        type="text/css"
      />
      <Link to="/home"
        onClick={resetReducer}>
        <h1 className="nav-title">100 Year Manifesto</h1>
      </Link>
      <ProgressBar />
      <div>
        {/* If a user is logged in, show these links */}
        {user.id && (
          <div>
            <MenuIcon
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                className="navLink"
                onClick={() => {
                  history.push("/home");
                  handleClose();
                }}
              >
                Home
              </MenuItem>
              <MenuItem
                className="navLink"
                onClick={() => {
                  // dispatch({ type:"SET_NEXT_BUTTON", payload: 8})
                  resetReducer();
                  history.push("/myManifesto");
                  handleClose();
                }}
              >
                My Manifesto
              </MenuItem>
              {
                user.role === 'admin' || user.role === 'superadmin' ?
                  <MenuItem 
                    className="navLink"
                    onClick={() => {
                      history.push("/admin");
                      handleClose();
                    }}
                  >
                  Admin
                  </MenuItem> :
                  <></>
              }
              <LogOutButton className="navLink" />
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
}
export default Nav;
