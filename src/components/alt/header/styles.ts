import { Menu } from "@mui/icons-material";
import { AppBar, Button, Paper, Stack, styled } from "@mui/material";

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

export const CenteredName = styled(Stack)(() => ({
  gap: "20px",
  alignItems: "center",
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

export const InitialsIcon = styled(Paper)(({ theme }) => ({
  width: 50,
  height: 50,
  borderRadius: 6,
  alignContent: "center",
  justifyContent: "center",
  align: "center",
  background: `linear-gradient(to right bottom, ${theme.palette.secondary.dark}, ${theme.palette.grey[200]})`,
  cursor: "default",
  userSelect: "none",
}));
