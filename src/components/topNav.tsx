import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";

export const TopNav: React.FC<{ props: string }> = () => {
  const isMobile = !useMediaQuery("(min-width:1000px)");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return isMobile ? (
    <Box>
      <IconButton
        id="menu-button"
        aria-controls={open ? "menu-list" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
        sx={{ padding: "0px" }}
      >
        <MenuIcon
          sx={{
            transform: `rotate(${open ? "90deg" : "0deg"})`,
            transition: "transform 0.3s ease",
          }}
        />
      </IconButton>
      <Menu
        id="menu-list"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Education</MenuItem>
        <MenuItem onClick={handleClose}>Skills</MenuItem>
        <MenuItem onClick={handleClose}>Projects</MenuItem>
      </Menu>
    </Box>
  ) : (
    <Stack direction={"row"}>
      <MenuItem>Home</MenuItem>
      <MenuItem>Education</MenuItem>
      <MenuItem>Skills</MenuItem>
      <MenuItem>Projects</MenuItem>
    </Stack>
  );
};
