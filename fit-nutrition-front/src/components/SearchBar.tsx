import { Box, IconButton, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "15vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          p: 2,
          minWidth: 650,
          maxWidth: 900,
          backgroundColor: "background.paper",
          borderRadius: "50px",
          boxShadow: "none",
          border: "1px solid #dfe1e5",
          "&:hover": {
            boxShadow: "0 1px 6px rgba(32,33,36,0.28)",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
              boxShadow: "none",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
          },
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search your craving..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </div>
  );
};

export default SearchBar;
