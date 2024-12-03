import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary" sx={{ height: 64 }}>
      <Toolbar>
        {/* Left Section: Navigation Links */}
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button color="inherit" onClick={() => navigate('/dashboard')}>
            Dashboard
          </Button>
          <Button color="inherit" onClick={() => navigate('/dietitians')}>
            Dietitians
          </Button>
          <Button color="inherit" onClick={() => navigate('/recipes')}>
            Recipes
          </Button>
        </Box>

        {/* Center Section: Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/')}
        >
          Website Logo
        </Typography>

        {/* Right Section: Profile Link */}
        <Box sx={{ flexGrow: 0 }}>
          <Button color="inherit" onClick={() => navigate('/profile')}>
            Profile
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
