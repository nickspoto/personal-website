import { Box, Menu, MenuItem, Stack, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { AnimatedMenuIcon, MenuListButton } from "./styles";
import { Home } from "@mui/icons-material";

export const TopNav: React.FC<{ props: string }> = () => {
  const collapseNav = !useMediaQuery("(min-width:1150px)");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItems = [
    collapseNav ? "Home" : <Home />,
    "Education",
    "Projects",
    "Skills",
    "Contact",
  ].map((item) => <MenuItem onClick={handleClose}>{item}</MenuItem>);
  return collapseNav ? (
    <Box>
      <MenuListButton
        aria-controls={open ? "menu-list" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AnimatedMenuIcon open={open} />
      </MenuListButton>
      <Menu
        id="menu-list"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {menuItems}
      </Menu>
    </Box>
  ) : (
    <Stack direction={"row"}>{menuItems}</Stack>
  );
};
