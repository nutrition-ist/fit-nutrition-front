import {
  Avatar,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
  Breadcrumbs,
  Link,
  Paper,
  CardActionArea,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

interface UserProfile {
  fullName: string;
  email: string;
  bio: string;
  avatarUrl: string;
}

interface Recipe {
  id: number;
  ingredients: string[];
  title: string;
  description: string;
}

export default function Profile() {
  const userProfile: UserProfile = {
    fullName: "Ibrahim Tatliseks",
    email: "Ibrahim.Tatliseks@gmail.com",
    bio: "Famous singer now doing recipes",
    avatarUrl:
      "https://bookingagentinfo.com/wp-content/uploads/2024/01/ab6761610000e5eb3c18a1aa50b5bbae720ed890-1.jpg",
  };

  const myRecipes: Recipe[] = [
    {
      id: 1,
      ingredients: ["Smear", "Cream"],
      title: "Smear Cake",
      description: "Delicious Smear Soup",
    },
    {
      id: 2,
      ingredients: ["Meat", "Carrot", "Potato"],
      title: "Meat Stew",
      description: "Meaty Stew",
    },
  ];

  const savedRecipes: Recipe[] = [
    {
      id: 3,
      ingredients: ["Chocalate", "Flour"],
      title: "Cookie",
      description: "Chipped Cookie",
    },
    {
      id: 4,
      ingredients: ["Egg", " Cheese", "Pancetta"],
      title: "Carbonara",
      description: "A classic Italian dish",
    },
  ];

  return (
    <Grid container spacing={2} justifyContent="center" style={{ padding: 20 }}>
      <Grid item xs={12}>
        <Box sx={{ px: { xs: 2, md: 6 }, py: 2 }}>
          <Breadcrumbs
            aria-label="breadcrumbs"
            separator={<ChevronRightRoundedIcon fontSize="small" />}
            sx={{ pl: 0 }}
          >
            <Link underline="none" color="neutral" href="./" aria-label="Home">
              <HomeRoundedIcon />
            </Link>
            <Link
              underline="hover"
              color="neutral"
              href="./users"
              fontSize={12}
              fontWeight={500}
            >
              Users
            </Link>
            <Typography color="primary" fontWeight={500} fontSize={12}>
              My profile
            </Typography>
          </Breadcrumbs>
          <Typography variant="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            My profile
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Grid container spacing={2} direction="column" alignItems="center">
              <Grid item>
                <Avatar
                  alt={userProfile.fullName}
                  src={userProfile.avatarUrl}
                  style={{ width: 100, height: 100 }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h5">{userProfile.fullName}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {userProfile.email}
                </Typography>
                <Typography variant="body1" style={{ marginTop: 10 }}>
                  {userProfile.bio}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AccountCircleIcon />}
                >
                  Edit Profile
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}  >
        <Paper elevation={2} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            My Recipes
          </Typography>
          {myRecipes.map((recipe) => (
            <Card key={recipe.id} sx={{ mb: 2 }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="h6">{recipe.title}</Typography>
                <Typography variant="subtitle1">Ingredients: {recipe.ingredients.join(', ')}</Typography>
                <Typography variant="body2">{recipe.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          ))}
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper elevation={2} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Saved Recipes
          </Typography>
          {savedRecipes.map((recipe) => (
           <Card key={recipe.id} sx={{ mb: 2 }}>
           <CardActionArea>
             <CardContent>
               <Typography variant="h6">{recipe.title}</Typography>
               <Typography variant="subtitle1">Ingredients: {recipe.ingredients.join(', ')}</Typography>
               <Typography variant="body2">{recipe.description}</Typography>
             </CardContent>
           </CardActionArea>
         </Card>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
}
