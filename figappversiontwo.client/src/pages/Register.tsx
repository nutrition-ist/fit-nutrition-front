import React, { useState, ChangeEvent, FormEvent } from "react";
import { TextField, Button, Typography, MenuItem, Box } from "@mui/material";
import axios from "axios";

interface FormData {
  userType: "D" | "P"; // "D" for Dietitian, "P" for Patient
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    userType: "D",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/",
  });
  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const endpoint =
      formData.userType === "D" ? "/register_dietician" : "/register_patient";

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.post(endpoint, {
        username: formData.username,
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone: formData.phone,
        password: formData.password,
      });

      setSuccessMessage(
        `${
          formData.userType === "D" ? "Dietitian" : "Patient"
        } registered successfully!`
      );
      setFormData({
        userType: "D",
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        password: "",
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(
        err.response?.data?.detail || "An error occurred during registration."
      );
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
        Register
      </Typography>

      <TextField
        select
        label="User Type"
        name="userType"
        value={formData.userType}
        onChange={handleChange}
        fullWidth
        required
      >
        <MenuItem value="D">Dietitian</MenuItem>
        <MenuItem value="P">Patient</MenuItem>
      </TextField>

      <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
        required
      />

      <TextField
        label="Phone"
        name="phone"
        value={formData.phone}
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
        Register
      </Button>
    </Box>
  );
};

export default RegisterPage;
