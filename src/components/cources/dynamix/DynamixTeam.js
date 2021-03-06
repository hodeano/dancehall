import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ReactPlayer from "react-player";
import './Courses.css';
import { useHistory } from "react-router-dom";






const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};



const draw1 =  () => {
    window.location.href='https://www.youtube.com/watch?v=xmdGpN6k9fM&ab_channel=JaLegendsdance'
}





export default function DynamixTeam() {
  let history = useHistory();

  return (

    

<div className="full-page" >
                               

            <div className="overload-shot">
             <img src="https://d3cjsf0o8cd718.cloudfront.net/dynamixx%20team%20header.jpg" />
             </div>
            


                                      
    <div className="course-name" >
         <br/>
         <Typography align="center" variant="h3"  >
               DYNAMIXX TEAM
         </Typography>

   </div>



<div>
<Divider/>
</div>
                                  

            <div className="player_holder">  
             <ReactPlayer controls={true} url='https://youtu.be/v7iBHsBjyEQ' />
            </div>

                                 

            <div className="body_type"> 

     <Typography align="alignLeft" variant="h6"  >
     Learn steps and choreography from the 2016 and 2019 world reggae dance 1st place champions
     </Typography>
     <br/>
     <Typography align="alignLeft" variant="h4"  >
     What will you learn? 
     </Typography>

     <Typography align="body1" variant="h6"  >

              <ul>
                <li> History of the dance steps and the correct move mechanics</li>
              </ul>

              <ul>
                <li>Basic history of our everyday life </li>
              </ul>

     </Typography>

     <Typography align="alignLeft" variant="h4"  >
     Requirements
     </Typography>
     <br/>
     <Typography align="body1" variant="h6"  >
     If you have no previous dance experience, don’t worry. To dance with us no experience is required! However you need to have that passion and desire to learn and try new things. As mastering dance moves requires practice, there’s no shortcut.
     </Typography>
     <br/>
     <Typography align="alignLeft" variant="h4"  >
     Who is the target audience?
     </Typography>


     <Typography align="body1" variant="h6"  >
     
              <ul>
                <li> Students of all ages and level</li>
                <li>People who are interested in Dancehall, Reggae and lovers for Jamaica culture</li>
                <li>Those who want to show off some cool moves to friends and family</li>
                <li>Those who want to take their dancing to a new level</li>
                <li>People who want know the history of Dancehall steps</li>
              </ul>
  
     </Typography>

         



                                  



<div> 
        <br/>

        <Typography align="left" variant="h3"  >
           -CURRICULUM-
        </Typography>
<br/>

   <Paper  elevation={7}  >

<br/>
        <Typography align="center" variant="h4"  >
        CHOREOGRAPHY
        </Typography>

    <List  mx={style}  component="nav" aria-label="mailbox folders">

                  <Divider />

                  <ListItem button onClick={() =>{ history.push('/dynamix-team-scortch-earth') }}  >
                  <ListItemText primary="Vybz kartel - scortch earth" />
                  </ListItem>

                  <Divider />

                  <ListItem button divider  onClick={() =>{ history.push('/dynamix-team-star-boy') }}  >
                  <ListItemText primary="MOVADO – STAR BOY / MID SCHOOL" />
                  </ListItem>

                  <ListItem button  onClick={() =>{ history.push('/dynamix-team-ohemaa') }} >
                  <ListItemText primary="KWAMZ AND FLAVA – Ohemaa " />
                  </ListItem>

                  <Divider />

                  <ListItem button onClick={() =>{ history.push('/dynamix-team-cool-as-the-breeze') }}  >
                  <ListItemText primary="CHRONIXX – COOL AS THE BREEZE" />
                  </ListItem>

                  <Divider />

                  <ListItem button onClick={() =>{ history.push('/dynamix-team-gangster') }}  >
                  <ListItemText primary="THE ALLIANCE – GANGSTER / MID SCHOOL" />
                  </ListItem>

                  <Divider light />
          </List>

      
      <Typography align="center" variant="h4"  >
          DANCE STEPS
      </Typography>
      



       <List   mx={style}  component="nav"  aria-label="mailbox folders">
       <Divider light />

                  <ListItem button onClick={() =>{ history.push('/dynamix-team-tidal-wave') }}  >   
                  <ListItemText primary="TIDAL WAVE" />
                  </ListItem>

                  <Divider />

                  <ListItem button divider onClick={() =>{ history.push('/dynamix-team-pull-trigga') }}  >
                  <ListItemText primary="PULL TRIGGA " />
                  </ListItem>

                  <ListItem button  onClick={() =>{ history.push('/dynamix-team-circulate') }}  >
                  <ListItemText primary="CIRCULATE" />
                  </ListItem>

                  <Divider light />

                
          </List>


          <Typography align="center" variant="h4"  >
          ABOUT DYNAMIX TEAM
          </Typography>
      



       <List   mx={style}  component="nav"  aria-label="mailbox folders">
       <Divider light />

                  <ListItem button  onClick={() =>{ history.push('/dynamix-team-interview') }}  > 
                  <ListItemText primary="INTERVIEW WITH RYAN, OSHANE AND NICK DYNAMIX" />
                  </ListItem>

                  <Divider light />

                
          </List>


          <Typography align="center" variant="h4"  >
          Bill A Vibe / Warm-Up
          </Typography>
      



       <List   mx={style}  component="nav"  aria-label="mailbox folders">
       <Divider light />

                  <ListItem button onClick={() =>{ history.push('/dynamix-team-bill-a-vybz') }} >
                  <ListItemText primary=" FREESTYLE / TEACH " />
                  </ListItem>

                
          </List>


      </Paper>
                        </div>

</div>







</div>
  );
}