import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import HeroImage from "../images/cook.png";
import TestimonialImage from "../images/nitfut.jpg";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          py: 2,
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Fit Nutrition
        </Typography>
        <Box>
          <Button variant="text" sx={{ mx: 1 }}>
            Home
          </Button>
          <Button
            variant="text"
            sx={{ mx: 1 }}
            onClick={() => navigate("/wip")} // Navigates to WIP
          >
            Dietitians
          </Button>
          <Button
            variant="text"
            sx={{ mx: 1 }}
            onClick={() => navigate("/wip")} // Navigates to WIP
          >
            Blog
          </Button>
          <Button
            variant="text"
            sx={{ mx: 1 }}
            onClick={() => navigate("/wip")} // Navigates to WIP
          >
            Dietitian Panel
          </Button>
        </Box>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 5,
          py: 5,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Find Your Perfect Dietitian
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 4 }}>
            Connect with expert dietitians and start your journey to a healthier
            you.
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Search for a dietitian"
            sx={{ width: "300px", mr: 2 }}
          />
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Box>
        <Box sx={{ maxWidth: "40%" }}>
          <img
            src={HeroImage}
            alt="Healthy lifestyle"
            style={{ maxWidth: "70%", height: "auto", borderRadius: "10px" }}
          />
        </Box>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ px: 5, py: 5 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
        >
          How It Works
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Search Dietitians
              </Typography>
              <Typography>
                Explore our list of qualified dietitians tailored to your
                preferences.
              </Typography>
              {/* Button to navigate to WIP page */}
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => navigate("/wip")}
              >
                Get Started
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Book a Consultation
              </Typography>
              <Typography>
                Schedule a session with your selected dietitian at your
                convenience.
              </Typography>
              {/* Button to navigate to WIP page */}
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => navigate("/wip")}
              >
                Book Now
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ textAlign: "center", p: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Achieve Your Goals
              </Typography>
              <Typography>
                Follow personalized diet plans and track your progress.
              </Typography>
              {/* Button to navigate to WIP page */}
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => navigate("/wip")}
              >
                Learn More
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          py: 5,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Success Stories
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  John Doe
                </Typography>
                <Typography sx={{ mb: 2 }}>"I like this site 5/5"</Typography>
                <img
                  src={TestimonialImage}
                  alt="John Doe"
                  style={{
                    maxWidth: "60%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: "#3f51b5",
          color: "#ffffff",
          py: 3,
          px: 5,
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          &copy; 2024 Fit Nutrition. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
