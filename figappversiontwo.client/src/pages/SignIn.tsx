import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { PaletteMode, Card as MuiCard } from "@mui/material";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ForgotPassword from "../components/ForgotPassword";
import ToggleColorMode from "../components/ToggleColorMode";
import { GoogleIcon, FacebookIcon } from "../components/CustomIcons";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const theme = useTheme();
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const defaultTheme = createTheme({ palette: { mode } });
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    if (validateInputs()) {
      try {
        const response = await fetch("backendurl/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const userDetails = await response.json();
          console.log(userDetails);
          navigate("/");
        } else {
          console.error("Failed to sign in");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const validateInputs = () => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };
  const signInContainerSx = {
    height: "auto",
    paddingBottom: { xs: 12, sm: 0 },
    backgroundImage: (theme: { palette: { mode: string; }; }) =>
      theme.palette.mode === "light"
        ? "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))"
        : "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.3), hsl(220, 30%, 5%))",
    backgroundRepeat: "no-repeat",
    minHeight: { sm: "100vh" },
  };

  const cardSx = {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    gap: 4,
    width: "100%",
    padding: 2,
    boxShadow: (theme: { palette: { mode: string; }; }) =>
      theme.palette.mode === "light"
        ? "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px"
        : "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px",
    [theme.breakpoints.up("sm")]: {
      padding: 4,
      width: 450,
    },
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Stack
        sx={signInContainerSx}
        direction="column"
        justifyContent="space-between"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            position: { xs: "static", sm: "fixed" },
            width: "100%",
            p: { xs: 2, sm: 4 },
          }}
        >
          <Button
            startIcon={<ArrowBackRoundedIcon />}
            component="a"
            onClick={handleBackClick}
          >
            Back
          </Button>
          <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
        </Stack>
        <Stack
          justifyContent="center"
          sx={{ height: { xs: "100%", sm: "100dvh" }, p: 2 }}
        >
          <MuiCard sx={cardSx}>
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
            >
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2,
              }}
            >
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <TextField
                  error={emailError}
                  helperText={emailErrorMessage}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={emailError ? "error" : "primary"}
                  sx={{ ariaLabel: "email" }}
                />
              </FormControl>
              <FormControl>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Link
                    component="button"
                    onClick={handleClickOpen}
                    variant="body2"
                    sx={{ alignSelf: "baseline" }}
                  >
                    Forgot your password?
                  </Link>
                </Box>
                <TextField
                  error={passwordError}
                  helperText={passwordErrorMessage}
                  name="password"
                  placeholder="••••••"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  color={passwordError ? "error" : "primary"}
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <ForgotPassword open={open} handleClose={handleClose} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={validateInputs}
              >
                Sign in
              </Button>
              <Link
                href="https://youtu.be/dQw4w9WgXcQ?si=MJsopTMkQltcLvUo"
                variant="body2"
                sx={{ alignSelf: "center" }}
              >
                Don&apos;t have an account? Sign up
              </Link>
            </Box>
            <Divider>or</Divider>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="secondary"
                onClick={() => alert("Sign in with Google")}
                startIcon={<GoogleIcon />}
              >
                Sign in with Google
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="secondary"
                onClick={() => alert("Sign in with Facebook")}
                startIcon={<FacebookIcon />}
              >
                Sign in with Facebook
              </Button>
            </Box>
          </MuiCard>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}