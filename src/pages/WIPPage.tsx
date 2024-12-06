import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WIPPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
      }}
    >
      {/* Back to Home Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{ position: "absolute", top: 20, left: 20 }}
        onClick={() => navigate("/")} // Navigate back to the home page
      >
        Back to Home
      </Button>

      {/* Main Content */}
      <Typography variant="h2" sx={{ mb: 2 }}>
        🚧 Work in Progress 🚧
      </Typography>
      <Typography variant="body1">
        This feature is currently under development. Check back later!
      </Typography>
    </Box>
  );
};

export default WIPPage;
