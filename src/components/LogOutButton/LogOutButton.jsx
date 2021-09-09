import React from 'react';
import { useDispatch } from 'react-redux';
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from 'react-router';

function LogOutButton(props) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  const handleLogOut = () => {
    setAnchorEl(event.currentTarget);
    dispatch({ type: "LOGOUT" });
    handleClose();
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuItem
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => {
        history.push("/homepage");
        handleLogOut()
        }
      }
      
    >
      Log Out
    </MenuItem>
  );
}

export default LogOutButton;