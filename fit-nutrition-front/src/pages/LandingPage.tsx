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
import TestimonialImage from "../images/fitman.png";

const LandingPage: React.FC = () => {
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
          <Button variant="text" sx={{ mx: 1 }}>
            Dietitians
          </Button>
          <Button variant="text" sx={{ mx: 1 }}>
            Blog
          </Button>
          <Button variant="contained" color="primary" sx={{ mx: 1 }}>
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
                  Hadrian Hillless
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  ""I never thought I'd stick to anything structured, but this
                  site changed my life. As a soldier constantly on the move,
                  staying healthy wasn’t just tough—it felt impossible. This
                  program gave me the tools to take control of my diet while
                  still living my restless, wandering life. I've lost a
                  significant amount of weight, feel sharper than ever, and even
                  my crew noticed the difference. If you're competitive like me,
                  the tracking system will keep you hooked. Plus, the meal plans
                  are surprisingly generous—no starving involved. Trust me,
                  coming from someone who trusts no one, this is the real deal.
                  Highly recommend." —Hadrian H."
                </Typography>
                <img
                  src={TestimonialImage}
                  alt="Hadrian Reis"
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
