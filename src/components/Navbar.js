import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AmplifySignOut  } from '@aws-amplify/ui-react'
import './navbar.css';

const draw1 =  () => {
  window.location.href='/'

}

export default function Navbar() {
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
          
          
         
          <Typography className="nav-text-pointer" onClick={ draw1 }  variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ja Legends 
          </Typography>
        
         
          <AmplifySignOut />

        </Toolbar>
      </AppBar>
    </Box>
  );
}