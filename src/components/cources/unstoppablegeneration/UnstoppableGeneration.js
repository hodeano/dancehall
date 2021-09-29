
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





export default function UnstoppableGeneration() {
  let history = useHistory();

  return (

    

<div className="full-page" >
                               

            <div className="overload-shot">
             <img src="https://d3cjsf0o8cd718.cloudfront.net/unstopable-header.jpg" />
             </div>
            


                                      
    <div className="course-name" >
         <br/>
         <Typography align="center" variant="h3"  >
         UNSTOPPABLE GENERATION
         </Typography>

   </div>



<div>
<Divider/>
</div>
                                  

            <div className="player_holder">  
             <ReactPlayer controls={true} url='https://youtu.be/NvbOX7bbB2I' />
            </div>

                                 

            <div className="body_type"> 

     <Typography align="alignLeft" variant="h6"  >
     SPARTA unstoppable teach his choreography and steps
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

                  <ListItem button onClick={() =>{ history.push('/unstoppable-generation-oh-nah-nah') }}  >
                  <ListItemText primary="Elephant Man – Oh Nah Nah" />
                  </ListItem>

                  <Divider />

                  <ListItem button divider  onClick={() =>{ history.push('/unstoppable-generation-put-eh-dung') }}  >
                  <ListItemText primary="STYLO G x STAMMA KID – PUT EH DUNG " />
                  </ListItem>

                  <ListItem button  onClick={() =>{ history.push('/unstoppable-generation-chiney-k-riddim') }} >
                  <ListItemText primary="Chiney K Riddim [ middle school ]" />
                  </ListItem>

                  <Divider light />
          </List>

      
      <Typography align="center" variant="h4"  >
          DANCE STEPS
      </Typography>
      



       <List   mx={style}  component="nav"  aria-label="mailbox folders">
       <Divider light />

                  <ListItem button onClick={() =>{ history.push('/unstoppable-generation-excellent') }}  >   
                  <ListItemText primary="Excellent" />
                  </ListItem>

                  <Divider />

                  <ListItem button divider onClick={() =>{ history.push('/unstoppable-generation-hand-piece') }}  >
                  <ListItemText primary=" Hand Piece" />
                  </ListItem>

                  <Divider light />

                
          </List>


          <Typography align="center" variant="h4"  >
          ABOUT DYNAMIX TEAM
          </Typography>
      



       <List   mx={style}  component="nav"  aria-label="mailbox folders">
       <Divider light />

                  <ListItem button  onClick={() =>{ history.push('/unstoppable-generation-interview') }}  > 
                  <ListItemText primary="INTERVIEW WITH SPARTA UNSTOPPABLE" />
                  </ListItem>

                  <Divider light />

                
          </List>


          <Typography align="center" variant="h4"  >
          Bill A Vibe / Warm-Up
          </Typography>
      



       <List   mx={style}  component="nav"  aria-label="mailbox folders">
       <Divider light />

                  <ListItem button onClick={() =>{ history.push('/unstoppable-generation-bill-a-vybz') }} >
                  <ListItemText primary=" SIMON SAYS " />
                  </ListItem>

                
          </List>


      </Paper>
                        </div>

</div>







</div>
  );
}