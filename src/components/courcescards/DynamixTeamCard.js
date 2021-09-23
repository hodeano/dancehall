import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function DynamixTeamCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
         
          image="https://d3cjsf0o8cd718.cloudfront.net/dynamixx team cardfit.jpg"
          alt="dynamix team"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            DYNAMIXX TEAM
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Take this course
        </Button>
      </CardActions>
    </Card>
  );
}