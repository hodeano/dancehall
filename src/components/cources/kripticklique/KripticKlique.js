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





export default function KripticKlique() {
  let history = useHistory();

  return (

    

<div className="full-page" >
                               

            <div className="overload-shot">
             <img src="https://d3cjsf0o8cd718.cloudfront.net/kriptic-header.jpg" />
             </div>
            


                                      
    <div className="course-name" >
         <br/>
         <Typography align="center" variant="h3"  >
         KRIPTIC KLIQUE
         </Typography>

   </div>



<div>
<Divider/>
</div>
                                  

            <div className="player_holder">  
             <ReactPlayer controls={true} url='https://youtu.be/lQ0l4LZdn_s' />
            </div>

                                 

            <div className="body_type"> 

     <Typography align="alignLeft" variant="h6"  >
     Welcome to the kriptic Klique certified master workshop here we are all about greater knowledge and understanding when it come on to the dancehall culture so we make it our point of duty to always make sure we give our students followers supporter and fan a full understanding of what we stand for in our teaching explanations and vibing so when you join our course you are going to understand the journey and growth the Jamaican culture endured and experience to get up the culture we all know and love today new School our workshop will take back to a vast from the past with 80s rock steady Skanking and music to when the groove master bogle started to dance and change the groove and flow into bogle moves waste lines and flow the show you when it all advanced into middle school which focus on dynamic and crazy energy of explosions come from the dancer until it reaches new School which is the perfect mixture of all of them put together in one motion we call our workshop the certified master class cause you gain knowledge from everything dancehall history music and dance
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

                  <ListItem button onClick={() =>{ history.push('/kriptic-klique-the-harder-they-come') }}  >
                  <ListItemText primary="Jimmy Cliff – the harder they come" />
                  </ListItem>

             
                  <Divider light />
          </List>

      
      <Typography align="center" variant="h4"  >
      ONLINE ZOOM CLASS OCTOBER / 3 AND 4 / 2020
      </Typography>
      



       <List   mx={style}  component="nav"  aria-label="mailbox folders">
       <Divider light />

                  <ListItem button onClick={() =>{ history.push('/kriptic-klique-zoom-class-ska-and-old-school') }}  >   
                  <ListItemText primary="SKA / OLD SCHOOL " />
                  </ListItem>

                  <Divider />

                  <ListItem button divider onClick={() =>{ history.push('/kriptic-klique-zoom-class-bougle') }}  >
                  <ListItemText primary=" BOGLE STEPS AND HISTORY " />
                  </ListItem>

                  <ListItem button  onClick={() =>{ history.push('/kriptic-klique-zoom-class-mid-school') }}  >
                  <ListItemText primary="MID SCHOOL " />
                  </ListItem>

                  <Divider />

                  <ListItem button onClick={() =>{ history.push('/kriptic-klique-zoom-class-new-school') }}  >
                  <ListItemText primary=" NEW SCHOOL " />
                  </ListItem>

                  <Divider light />

                
          </List>







          <Typography align="center" variant="h4"  >
          DANCE STEPS
          </Typography>
      



       <List   mx={style}  component="nav"  aria-label="mailbox folders">
       
       <Divider />

                  <ListItem button onClick={() =>{ history.push('/kriptic-klique-current-flow') }} >
                  <ListItemText primary=" CURRENT FLOW " />
                  </ListItem>

                  <Divider light />
                
          </List>







          <Typography align="center" variant="h4"  >
          ABOUT KRIPTICK KLIQUE
          </Typography>
      



       <List   mx={style}  component="nav"  aria-label="mailbox folders">
       
       <Divider />

                  <ListItem button  onClick={() =>{ history.push('/kriptic-klique-interview') }}  > 
                  <ListItemText primary="INTERVIEW WITH 7EVN KRIPTIC KLIQUE" />
                  </ListItem>

                

                
          </List>




      </Paper>
                        </div>

</div>







</div>
  );
}