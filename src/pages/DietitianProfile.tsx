/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, ChangeEvent } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const DietitianProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<any | null>(null);
  const [formData, setFormData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/profile"); // Mock data bu silcez
        setProfile(response.data);
        setFormData(response.data);
      } catch (err: any) {
        setError("Failed to fetch profile. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    //Mockende save atma normal back ile de çalışır
    try {
      setError(null);
      const response = await axios.put(
        "http://localhost:8000/profile",
        formData
      );
      setProfile(response.data);
      setIsEditing(false);
    } catch (err: any) {
      setError("Failed to update profile. Please try again.");
    }
  };

  // Cancel editing
  const handleCancel = () => {
    setFormData(profile); // Reset form data to original profile
    setIsEditing(false); // Exit edit mode
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
        {/* Profile Picture and Contact Information Section */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img
              src={profile?.profilePicture || "https://via.placeholder.com/150"}
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
                          profilePicture: reader.result,
                        }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </Button>
            )}

            {/* Name */}
            <TextField
              label="Name"
              fullWidth
              name="identity"
              value={formData?.identity || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              sx={{ mb: 2 }}
            />

            {/* Email */}
            <TextField
              label="Email"
              fullWidth
              name="email"
              value={formData?.email || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              sx={{ mb: 2 }}
            />

            {/* Cell Number */}
            <TextField
              label="Cell Number"
              fullWidth
              name="cellNumber"
              value={formData?.cellNumber || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              sx={{ mb: 2 }}
            />

            {/* Address */}
            <TextField
              label="Address"
              fullWidth
              name="address"
              value={formData?.address || ""}
              onChange={handleInputChange}
              disabled={!isEditing}
              sx={{ mb: 2 }}
            />
          </Box>
        </Grid>

        {/* About Me and Highlighted Recipes Section */}
        <Grid item xs={12} sm={8}>
          {/* About Me */}
          <Typography variant="h6" sx={{ mb: 1 }}>
            About Me:
          </Typography>
          {isEditing ? (
            <TextField
              fullWidth
              name="aboutMe"
              value={formData?.aboutMe || ""}
              onChange={handleInputChange}
              multiline
              rows={4}
              sx={{ mb: 3 }}
            />
          ) : (
            <Typography variant="body1" sx={{ mb: 3 }}>
              {profile?.aboutMe}
            </Typography>
          )}

          {/* Highlighted Recipes */}
          <Typography variant="h6" sx={{ mb: 1 }}>
            Highlighted Recipes:
          </Typography>
          <Grid container spacing={2}>
            {profile?.highlightedRecipes.map((recipe: any) => (
              <Grid item xs={12} sm={6} key={recipe.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {recipe.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {recipe.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Buttons for Editing */}
      <Box sx={{ mt: 5, textAlign: "center" }}>
        {isEditing ? (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              sx={{ mx: 2 }}
            >
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default DietitianProfile;
