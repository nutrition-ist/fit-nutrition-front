import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Toolbar
        sx={{
          justifyContent: "flex-end",
          width: "98%",
        }}
      >
        <Button size="small" onClick={() => navigate("/profile")}>
          Profile{" "}
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </Button>
      </Toolbar>
    </>
  );
};

export default Header;
