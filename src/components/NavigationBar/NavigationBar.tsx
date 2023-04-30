import React from "react";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const NavigationBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Current Page Title
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Index
          </Button>
          <Button color="inherit" component={RouterLink} to="/home">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/todo">
            Todo
          </Button>
          <Button color="inherit" component={RouterLink} to="/finance">
            Finance
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
