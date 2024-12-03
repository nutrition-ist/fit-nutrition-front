import React from "react";
import nitImage from "../images/nitfut.jpg";
import { AppBar, Toolbar, Box, Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary" sx={{ height: 64 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Section: Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" onClick={() => navigate("/dashboard")}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => navigate("/dietitians")}>
            Dietitians
          </Button>
          <Button color="inherit" onClick={() => navigate("/recipes")}>
            Recipes
          </Button>
        </Box>

        {/* Center Section: Logo */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={nitImage}
            alt="Website Logo"
            style={{ height: "40px", cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </Box>

        {/* Right Section: Profile Link */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar
            src="/path-to-profile-image.jpg"
            alt="Profile"
            sx={{ width: 32, height: 32 }}
          />
          <Button color="inherit" onClick={() => navigate("/profile")}>
            Profile
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
