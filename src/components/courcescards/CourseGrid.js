import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TwinStarzzCard from './TwinStarzzCard';
import DynamixTeamCard from './DynamixTeamCard';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import OverloadSkankazCard from './OverloadSkankazCard';
import FlameTeamCard from './FlameTeamCard';
import ProblemSquadCard from './ProblemSquadCard';
import UnstoppableGeneration from '../cources/unstoppablegeneration/UnstoppableGeneration';
import UnstoppableGenerationCard from './UnstoppableGenerationCard';
import KripticKliqueCard from './KripticKliqueCard';
import MiddleSchoolDancehallCard from './MiddleSchollDancehallCard';




const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CourseGrid() {
  return (



<div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>

        <Grid item xs={6}  md={3} >
          <Item>  <TwinStarzzCard/> </Item>
        </Grid>

        <Grid item xs={6} md={3}>
          <Item> <DynamixTeamCard/> </Item>
        </Grid>

        <Grid item xs={6}  md={3} >
          <Item>  <OverloadSkankazCard/> </Item>
        </Grid>

        <Grid item xs={6} md={3}>
          <Item> <FlameTeamCard/> </Item>
        </Grid>

        <Grid item xs={6}  md={3} >
          <Item>  <ProblemSquadCard/> </Item>
        </Grid>

        <Grid item xs={6} md={3}>
          <Item> <UnstoppableGenerationCard/> </Item>
        </Grid>

        <Grid item xs={6} md={3}>
          <Item> <KripticKliqueCard/> </Item>
        </Grid>

        <Grid item xs={6}  md={3} >
          <Item>  <MiddleSchoolDancehallCard/> </Item>
        </Grid>



      
      </Grid>
    </Box>
    </div>
  );
}