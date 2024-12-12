/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Typography,
  Avatar,
  Tabs,
  Tab,
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface DietitianDashboardData {
  dietician: {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    about_me: string;
    qualifications: { qualifications: string[] };
    phone: string;
    address: string;
    profile_picture: string | null;
    facebook: string;
    instagram: string;
    x_twitter: string;
    youtube: string;
    whatsapp: string;
  };
  patients_list: {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    dietician: number;
    profile_picture: string | null;
  }[];
  appointment_list: {
    id: number;
    patient: number;
    dietician: number;
    date_time: string;
    is_active: boolean;
  }[];
}

const DietitianDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [profile, setProfile] = useState<DietitianDashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get<DietitianDashboardData>(
          "http://127.0.0.1:8000/dietitian/me/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProfile(response.data);
      } catch (err: any) {
        if (err.response?.status === 401) {
          localStorage.removeItem("accessToken");
          navigate("/login");
        } else {
          setError("Failed to fetch profile. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Grid container sx={{ height: "100vh" }}>
        {/* Left Sidebar: Profile Section */}
        <Grid
          item
          xs={12}
          md={2}
          lg={2}
          sx={{ backgroundColor: "#f4f4f4", padding: 2 }}
        >
          <Card sx={{ padding: 3, textAlign: "center" }}>
            <Avatar
              alt="Dietitian Picture"
              src={
                profile.dietician.profile_picture ||
                "https://via.placeholder.com/150"
              }
              sx={{ width: 100, height: 100, margin: "0 auto 16px auto" }}
            />
            <Typography variant="h6">
              {profile.dietician.first_name} {profile.dietician.last_name}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              {profile.dietician.about_me}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              {profile.dietician.qualifications.qualifications.join(", ")}
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
            <Tab label="Patients" />
            <Tab label="Appointments" />
            <Tab label="Contact & Socials" />
          </Tabs>

          {/* Tabs Content */}
          <Box sx={{ marginTop: 3 }}>
            {activeTab === 0 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Patients
                </Typography>
                <List>
                  {profile.patients_list.map((patient) => (
                    <ListItem key={patient.id}>
                      <ListItemText
                        primary={`${patient.first_name} ${patient.last_name}`}
                        secondary={patient.email}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
            {activeTab === 1 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Appointments
                </Typography>
                <List>
                  {profile.appointment_list.map((appointment) => (
                    <ListItem key={appointment.id}>
                      <ListItemText
                        primary={`Appointment on ${new Date(
                          appointment.date_time
                        ).toLocaleString()}`}
                        secondary={`Active: ${appointment.is_active}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
            {activeTab === 2 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Contact & Socials
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Phone: {profile.dietician.phone}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Address: {profile.dietician.address}
                </Typography>
                <List>
                  <ListItem>
                    <Link
                      href={profile.dietician.facebook}
                      target="_blank"
                      rel="noopener"
                    >
                      Facebook
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href={profile.dietician.instagram}
                      target="_blank"
                      rel="noopener"
                    >
                      Instagram
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href={profile.dietician.x_twitter}
                      target="_blank"
                      rel="noopener"
                    >
                      Twitter
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      href={profile.dietician.youtube}
                      target="_blank"
                      rel="noopener"
                    >
                      YouTube
                    </Link>
                  </ListItem>
                </List>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DietitianDashboard;
