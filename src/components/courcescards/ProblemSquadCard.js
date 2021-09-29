import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useHistory } from "react-router-dom";



export default function ProblemSquadCard() {
  let history = useHistory();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
         
          image="https://d3cjsf0o8cd718.cloudfront.net/problem cardfit.jpg"
          alt="dynamix team"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          PROBLEM SQUAD
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() =>{ history.push('/problemsquad') }}   size="small" color="primary">
          Take this course
        </Button>
      </CardActions>
    </Card>
  );
}