import {
  AppBar,
  List,
  ListItem,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { containerPadding } from "../../styles/spacing";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(to right, white 0%, white 15%, #F6F6F6 20%, #F6F6F6 100%)",
        color: "black",
        boxShadow: "none",
        padding: "25px 0",
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
              // fontFamily: "Roboto Mono",
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            Software developer
          </Typography>
        </Box>

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
          <ListItem component={Link} to="/">
            Home
          </ListItem>
          <ListItem component={Link} to="/about">
            About Me
          </ListItem>
          <ListItem component={Link} to="/projects">
            Projects
          </ListItem>
          <ListItem component={Link} to="/contact">
            Get in Touch
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
