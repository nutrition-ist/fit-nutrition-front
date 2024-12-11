/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, ChangeEvent, FormEvent } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";

interface LoginFormData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/token/",
        formData
      );

      const { access, refresh } = response.data;
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      setSuccessMessage("Login successful!");
      navigate("/dietitian-profile"); // Redirect to profile page
    } catch (err: any) {
      setError(err.response?.data?.detail || "Invalid username or password.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        mt: 5,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h4" textAlign="center">
        Login
      </Typography>

      <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        required
      />

      {error && (
        <Typography color="error" textAlign="center">
          {error}
        </Typography>
      )}
      {successMessage && (
        <Typography color="primary" textAlign="center">
          {successMessage}
        </Typography>
      )}

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
