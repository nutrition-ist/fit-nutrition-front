import React, { useState } from "react";
import { Grid, Card, Typography, Avatar, Tabs, Tab, Box } from "@mui/material";
import Navbar from "../components/Navbar";

const PatientProfile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <>
    <Navbar/>

    <Grid container sx={{ height: "100vh" }}>
      {/* Left Sidebar: Profile Section */}
      <Grid
        item
        xs={12}
        md={2}
        lg={2}
        sx={{ backgroundColor: "#f4f4f4", padding: 2 }}
      >
        <Card sx={{ padding: 3, height: "auto", textAlign: "center" }}>
          <Avatar
            alt="Patient Picture"
            src="https://i.kym-cdn.com/photos/images/original/002/492/597/935.jpg"
            sx={{ width: 100, height: 100, margin: "0 auto 16px auto" }}
          />
          <Typography variant="h6">Ibni Sina</Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            Ibni Sina
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            Dietitian: Dr. Karatay
          </Typography>
        </Card>
      </Grid>

      {/* Main Content: Tabs Section */}
      <Grid item xs={12} md={10} lg={10} sx={{ padding: 3 }}>
        {/* Tabs Navigation */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab label="My Recipes" />
          <Tab label="My Measurements" />
          <Tab label="My Diet Lists" />
          <Tab label="My Appointments" />
        </Tabs>

        {/* Tabs Content */}
        <Box sx={{ marginTop: 3 }}>
          {activeTab === 0 && (
            <Typography variant="body1">
              <strong>Recipes Content:</strong> Manage your personalized recipes
              here.
            </Typography>
          )}
          {activeTab === 1 && (
            <Typography variant="body1">
              <strong>Measurements Content:</strong> Track your progress and
              body measurements.
            </Typography>
          )}
          {activeTab === 2 && (
            <Typography variant="body1">
              <strong>Diet Lists Content:</strong> View your diet plans and meal
              schedules here.
            </Typography>
          )}
          {activeTab === 3 && (
            <Typography variant="body1">
              <strong>Appointments Content:</strong> Manage and review your past
              and upcoming appointments.
            </Typography>
          )}
        </Box>
      </Grid>
    </Grid>
    </>
  );
};

export default PatientProfile;
