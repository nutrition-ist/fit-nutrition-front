import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const PatientProfile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {/* Left Section: Profile Information */}
      <Grid item xs={12} md={4}>
        <Card sx={{ padding: 3 }}>
          <Avatar
            alt="Patient Picture"
            src="https://i.kym-cdn.com/photos/images/original/002/492/597/935.jpg"
            sx={{ width: 120, height: 120, margin: '0 auto 16px auto' }}
          />
          <Typography variant="h5" align="center">Ibni Sina</Typography>
          <Typography variant="subtitle1" align="center">ibni.sina@gmail.com</Typography>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Dietitian: Dr. Karatay
          </Typography>
        </Card>
      </Grid>

      {/* Right Section: Options */}
      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          {/* My Recipes */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">My Recipes</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  View and manage your personalized recipes.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  fullWidth
                  onClick={() => navigate('/recipes')}
                >
                  Go to My Recipes
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* My Measurements */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">My Measurements</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Check and track your measurements over time.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  fullWidth
                  onClick={() => navigate('/measurements')}
                >
                  Go to My Measurements
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* My Diet Lists */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">My Diet Lists</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Access your diet plans and meal schedules.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  fullWidth
                  onClick={() => navigate('/diet-lists')}
                >
                  Go to My Diet Lists
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* My Appointments */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">My Appointments</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Manage and schedule your appointments.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  fullWidth
                  onClick={() => navigate('/appointments')}
                >
                  Go to My Appointments
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PatientProfile;
