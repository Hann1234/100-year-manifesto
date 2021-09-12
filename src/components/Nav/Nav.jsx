import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "../ProgressBar/ProgressBar";

import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

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
  useEffect(() => {
    setAnchorEl(null);
  }, [user]);

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

  const handleLogOut = () => {
    setAnchorEl(event.currentTarget);
    dispatch({ type: "LOGOUT" });
    handleClose();
  };

  return (
    <div className="nav">
      <link
        href="https://allfont.net/allfont.css?fonts=oswald-stencil-bold"
        rel="stylesheet"
        type="text/css"
      />
      <Link to="/home">
        <h1
          className="nav-title"
          onClick={() => {
            dispatch({ type: "CLEAR_NEXT_BUTTON" });
          }}
        >
          100 Year Manifesto
        </h1>
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
                  history.push("/myManifesto");
                  dispatch({ type: "CLEAR_NEXT_BUTTON" });
                  handleClose();
                }}
              >
                My Manifesto
              </MenuItem>
              {user.role === "admin" || user.role === "superadmin" ? (
                <MenuItem
                  className="navLink"
                  onClick={() => {
                    dispatch({ type: "CLEAR_NEXT_BUTTON" });
                    history.push("/admin");
                    handleClose();
                  }}
                >
                  Admin
                </MenuItem>
              ) : (
                <></>
              )}
              <LogOutButton
                className="navLink"
                // onClick={() => {
                //   handleLogOut();
                // }}
              />
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
}
export default Nav;
