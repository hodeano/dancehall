import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TwinStarzzCard from './courcescards/TwinStarzzCard';
import DynamixTeamCard from './courcescards/DynamixTeamCard';
import Card from '@mui/material/Card';




const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>

        <Grid item xs={6}  md={3} >
          <Item>  <TwinStarzzCard/> </Item>
        </Grid>

        <Grid item xs={6} md={3}>
          <Item> <DynamixTeamCard/> </Item>
        </Grid>

        <Grid item xs={6}  md={3} >
          <Item>  <TwinStarzzCard/> </Item>
        </Grid>

        <Grid item xs={6} md={3}>
          <Item> <DynamixTeamCard/> </Item>
        </Grid>

        <Grid item xs={6}  md={3} >
          <Item>  <TwinStarzzCard/> </Item>
        </Grid>

        <Grid item xs={6} md={3}>
          <Item> <DynamixTeamCard/> </Item>
        </Grid>

        <Grid item xs={6} md={3}>
          <Item> <DynamixTeamCard/> </Item>
        </Grid>

        <Grid item xs={6}  md={3} >
          <Item>  <TwinStarzzCard/> </Item>
        </Grid>

        <Grid item xs={6} md={3}>
          <Item> <DynamixTeamCard/> </Item>
        </Grid>


      
      </Grid>
    </Box>
  );
}