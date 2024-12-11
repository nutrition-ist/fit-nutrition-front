/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  CircularProgress,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface DietitianProfileData {
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

const DietitianProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<DietitianProfileData | null>(null);
  const [formData, setFormData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login"); // Redirect to login page if not authenticated
      return;
    }

    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get<DietitianProfileData>(
          "http://127.0.0.1:8000/dietitian/me/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(response.data);
        setFormData(response.data.dietician);
      } catch (err: any) {
        if (err.response?.status === 401) {
          localStorage.removeItem("accessToken"); // Clear invalid token
          navigate("/login"); // Redirect to login
        } else {
          setError("Failed to fetch profile. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      setError(null);
      const token = localStorage.getItem("accessToken");
      const response = await axios.put(
        "http://127.0.0.1:8000/dietitian/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfile((prev) => ({
        ...prev!,
        dietician: response.data,
      }));
      setIsEditing(false);
    } catch (err: any) {
      setError("Failed to update profile. Please try again.");
    }
  };

  const handleCancel = () => {
    setFormData(profile?.dietician || null);
    setIsEditing(false);
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

  return (
    <Box sx={{ maxWidth: 1000, mx: "auto", mt: 5, px: 3 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}
      >
        Dietitian Profile
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={
                profile?.dietician.profile_picture ||
                "https://via.placeholder.com/150"
              }
              alt="Profile"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "16px",
              }}
            />
            {isEditing && (
              <Button variant="outlined" component="label" sx={{ mb: 3 }}>
                Upload New
                <input
                  type="file"
                  hidden
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setFormData((prev: any) => ({
                          ...prev,
                          profile_picture: reader.result,
                        }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </Button>
            )}
          </Box>
        </Grid>

        <Grid item xs={12} sm={8}>
          <TextField
            label="First Name"
            fullWidth
            name="first_name"
            value={formData?.first_name || ""}
            onChange={handleInputChange}
            disabled={!isEditing}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Last Name"
            fullWidth
            name="last_name"
            value={formData?.last_name || ""}
            onChange={handleInputChange}
            disabled={!isEditing}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Phone"
            fullWidth
            name="phone"
            value={formData?.phone || ""}
            onChange={handleInputChange}
            disabled={!isEditing}
            sx={{ mb: 2 }}
          />
        </Grid>
      </Grid>

      <Box>
        <Typography variant="h5">Patients</Typography>
        <List>
          {profile?.patients_list.map((patient) => (
            <ListItem key={patient.id}>
              <ListItemText
                primary={`${patient.first_name} ${patient.last_name}`}
                secondary={patient.email}
              />
            </ListItem>
          ))}
        </List>

        <Typography variant="h5">Appointments</Typography>
        <List>
          {profile?.appointment_list.map((appointment) => (
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

      <Box>
        <Typography variant="h6">Social Links</Typography>
        <List>
          <ListItem>
            <Link
              href={profile?.dietician.facebook}
              target="_blank"
              rel="noopener"
            >
              Facebook
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href={profile?.dietician.instagram}
              target="_blank"
              rel="noopener"
            >
              Instagram
            </Link>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ mt: 3, textAlign: "center" }}>
        {isEditing ? (
          <>
            <Button variant="contained" onClick={handleSave} sx={{ mx: 2 }}>
              Save
            </Button>
            <Button variant="outlined" onClick={handleCancel}>
              Cancel
            </Button>
          </>
        ) : (
          <Button variant="contained" onClick={() => setIsEditing(true)}>
            Edit Profile
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default DietitianProfile;
