import { Menu } from "@mui/icons-material";
import { AppBar, Button, Stack, styled, Typography } from "@mui/material";

export const HeaderAppBar = styled(AppBar)(() => ({
  position: "static",
  width: "100%",
  height: "100px",
  padding: "45px",
}));

export const NavAlign = styled(Stack)(() => ({
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  height: "100%",
}));

export const CenteredName = styled(Typography)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)", //make sure the name is exactly in the center
}));

export const AnimatedMenuIcon = styled(Menu, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ open }) => ({
  transform: `rotate(${open ? "90deg" : "0deg"})`,
  transition: "transform 0.3s ease",
}));

export const MenuListButton = styled(Button)(() => ({
  color: "inherit",
  padding: "10px 5px",
}));
