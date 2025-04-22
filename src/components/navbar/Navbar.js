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

// Framer Motion
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionDiv = motion.div;

const Navbar = () => {
  return (
    <MotionDiv
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <AppBar
        position="fixed"  // Make navbar fixed
        sx={{
          backgroundColor: "#1565c0",
          opacity: 0.95,
          top: 0, // Fixes the navbar at the top
          left: 0,
          right: 0,
          zIndex: 1300, // Ensures navbar is always on top
        }}
        elevation={2}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box display="flex" alignItems="center">
            <motion.img
              src={logo}
              alt="Logo"
              style={{ height: 40, marginRight: 12 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            />
            <Typography variant="h6" component="div">
              BudhAditya
            </Typography>
          </Box>

          {/* Center Menu */}
          <Box display="flex" justifyContent="center" gap={3} flex={1}>
            {["Services", "Technologies", "Industry Insights", "About", "Blogs"].map((item, index) => (
              <MotionBox
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  color="inherit"
                  component={Link}
                  to={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {item}
                </Button>
              </MotionBox>
            ))}
          </Box>

          {/* Right: Sign In / Register */}
          <Box display="flex" gap={1}>
            <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                color="inherit"
                startIcon={<LoginIcon />}
                component={Link}
                to="/signin"
              >
                Sign In
              </Button>
            </MotionBox>
            <MotionBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<PersonAddIcon />}
                component={Link}
                to="/register"
              >
                Register
              </Button>
            </MotionBox>
          </Box>
        </Toolbar>
      </AppBar>
    </MotionDiv>
  );
};

export default Navbar;
