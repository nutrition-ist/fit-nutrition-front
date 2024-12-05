import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import { Box, Button, Grid, Typography } from "@mui/material";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import KebabDiningOutlinedIcon from "@mui/icons-material/KebabDiningOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";

const sections = [
  { title: "Main", url: "#", icon: <MenuBookOutlinedIcon /> },
  { title: "American", url: "#", icon: <LunchDiningOutlinedIcon /> },
  { title: "Vegan", url: "#", icon: <MenuBookOutlinedIcon /> },
  { title: "Vegetarian", url: "#", icon: <YardOutlinedIcon /> },
  { title: "Deserts", url: "#", icon: <MenuBookOutlinedIcon /> },
  { title: "Black Culture Food", url: "#", icon: <MenuBookOutlinedIcon /> },
  { title: "Turkish", url: "#", icon: <KebabDiningOutlinedIcon /> },
  { title: "Picnic", url: "#", icon: <MenuBookOutlinedIcon /> },
];
export default function Home() {
  return (
    <>
      <Navbar />

      <Grid
        container
        spacing={3}
        style={{
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
        }}
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <SearchBar />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              margin: "0 auto",
              maxWidth: 480,
            }}
          >
            {sections.map((section) => (
              <Box
                key={section.title}
                sx={{ width: 100, textAlign: "center", margin: 1 }}
              >
                <Button
                  variant="contained"
                  href={section.url}
                  sx={{ borderRadius: "50%", padding: 2, minWidth: 72 }}
                >
                  {section.icon}
                </Button>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ marginTop: 0.5 }}
                >
                  {section.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
