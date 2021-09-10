import React from "react";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function LogInButton() {

    const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch ();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleLogOut = () => {
        setAnchorEl(event.currentTarget);
        dispatch({ type: "LOGOUT" });
     };


    switch (user.id != null) {
    case true:
        return (
          <Button
            color="inherit"
            onClick={() => handleLogOut()}
          >
            Logout
          </Button>
        );
      break;
    case false:
        return (
          <Button
            color="inherit"
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </Button>
        );
      break;
    default:
      return null;
  }
}

export default LogInButton;