// src/components/Navbar/Navbar.js

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import logo from "../resources/logo.png";

// Icons
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary" elevation={4}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box display="flex" alignItems="center">
          <img src={logo} alt="Logo" style={{ height: 40, marginRight: 12 }} />
          <Typography variant="h6" component="div">
            BudhAditya
          </Typography>
        </Box>

        {/* Center Menu */}
        <Box display="flex" justifyContent="center" gap={3} flex={1}>
          <Button color="inherit" component={Link} to="/services">
            Services
          </Button>
          <Button color="inherit" component={Link} to="/technologies">
            Technologies
          </Button>
          <Button color="inherit" component={Link} to="/industry-insights">
            Industry Insights
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/blogs">
            Blogs
          </Button>
        </Box>

        {/* Right: Sign In / Register */}
        <Box display="flex" gap={1}>
          <Button
            color="inherit"
            startIcon={<LoginIcon />}
            component={Link}
            to="/signin"
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<PersonAddIcon />}
            component={Link}
            to="/register"
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
