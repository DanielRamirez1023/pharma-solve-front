import { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { AppContext } from "../context/global-context";

export function MenuUser() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user } = useContext(AppContext);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=" absolute right-4 top-0.5">
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        className="gap-2"
      >
        <div className=" flex-col place-items-end hidden md:flex">
          <Typography>{user.name}</Typography>
          <Typography variant="caption">{user.role}</Typography>
        </div>
        <AccountCircle fontSize="large" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <AccountCircle fontSize="large" />
          <div className="ml-2 flex-col justify-items-start flex md:hidden">
            <Typography>{user.name}</Typography>
            <Typography className="text-xs" variant="caption">
              {user.role}
            </Typography>
          </div>
        </MenuItem>

        <a href="/" className=" sm:hidden">
          <MenuItem className="gap-1">
            <LogoutIcon />
            Cerrar Sesion
          </MenuItem>
        </a>
      </Menu>
    </div>
  );
}
