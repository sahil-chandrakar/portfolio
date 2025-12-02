import {
  AppBar,
  List,
  ListItem,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { containerPadding } from "../../styles/spacing";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(to right, white 0%, white 15%, #F6F6F6 20%, #F6F6F6 100%)",
        color: "black",
        boxShadow: "none",
        padding: "15px 0",
        px: containerPadding,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 !important",
        }}
      >
        {/* BRAND */}
        <Box>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontFamily: "Roboto Mono",
              fontWeight: "900",
            }}
          >
            Sahil.
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Software developer
          </Typography>
        </Box>

        {/* DESKTOP MENU */}
        <List
          sx={{
            gap: 3,
            listStyle: "none",
            "& .MuiListItem-root": {
              width: "auto",
              cursor: "pointer",
            },
            display: { xs: "none", md: "flex" },
          }}
        >
          <ListItem component={Link} to="/">Home</ListItem>
          <ListItem component={Link} to="/about">About Me</ListItem>
          <ListItem component={Link} to="/projects">Projects</ListItem>
          <ListItem component={Link} to="/contact">Get in Touch</ListItem>
        </List>

        {/* MOBILE MENU ICON */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={() => setOpen(true)}
        >
          <MenuIcon sx={{ color: "black" }} />
        </IconButton>
      </Toolbar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 230,
            padding: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <ListItem component={Link} to="/" onClick={() => setOpen(false)}>Home</ListItem>
          <ListItem component={Link} to="/about" onClick={() => setOpen(false)}>About Me</ListItem>
          <ListItem component={Link} to="/projects" onClick={() => setOpen(false)}>Projects</ListItem>
          <ListItem component={Link} to="/contact" onClick={() => setOpen(false)}>Get in Touch</ListItem>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
