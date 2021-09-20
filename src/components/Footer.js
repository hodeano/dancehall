import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';




import Divider from '@mui/material/Divider';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';




function Copyright() {
  return (
    <Typography align="center" variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https:/jalegends.com//">
        ja legends
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      
      <Box
      
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container align="center" maxWidth="sm">

          <Typography variant="body1">
            Connect with us Email:Jalegendsteam@gmail.com Tell:18764147616
          </Typography>


          <Stack justifyContent="center" direction="row" spacing={1} divider={<Divider orientation="vertical" flexItem />}  >

      <IconButton  color="error"  aria-label="youtube" href="https://www.youtube.com/channel/UCS-S71T9VKiM4zwvgx_aOwQ"    >
      <YouTubeIcon />
      </IconButton>

      <IconButton   color="primary" aria-label="facebook" href="https://www.facebook.com/jalegends"  >
        <FacebookIcon />
      </IconButton>

      <IconButton  color="warning" aria-label="instagram"  href="https://www.instagram.com/jalegends_dancee/"  >
        <InstagramIcon />
      </IconButton>
      
          </Stack>
<br/>


          <Copyright />


        </Container>
      </Box>
    </Box>
  );
}
