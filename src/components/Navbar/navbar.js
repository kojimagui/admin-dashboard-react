import React from "react";

import * as s from "./styles";

import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";

import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            onClose={handleDrawerClose}
          >
            <s.DrawerHeader>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerClose}
              >
                <MenuIcon />
              </IconButton>
            </s.DrawerHeader>
            <p>O teste</p>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
}
