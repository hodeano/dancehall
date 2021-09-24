import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ReactPlayer from "react-player";
import './Courses.css';






const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};



const draw1 =  () => {
    window.location.href='https://www.youtube.com/watch?v=xmdGpN6k9fM&ab_channel=JaLegendsdance'
}





export default function DynamixTeam() {
  

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

       <Typography align="center" variant="h4"  >
           CHOREOGRAPHY
        </Typography>


   <Paper  elevation={7}  >


    <List  mx={style}  component="nav" aria-label="mailbox folders">

                  <ListItem button  >
                  <ListItemText primary="Vybz kartel - scortch earth" />
                  </ListItem>

                  <Divider />

                  <ListItem button divider>
                  <ListItemText primary="Drafts" />
                  </ListItem>

                  <ListItem button>
                  <ListItemText primary="Trash" />
                  </ListItem>

                  <Divider />

                  <ListItem button>
                  <ListItemText primary="Spam" />
                  </ListItem>

                  <Divider light />
          </List>

      
      <Typography align="center" variant="h4"  >
          DANCE MOVES
      </Typography>
      



       <List   mx={style}  component="nav"  aria-label="mailbox folders">
       <Divider light />
                  <ListItem button >
                  
                  <ListItemText primary="Inbox" />
                  </ListItem>

                  <Divider />

                  <ListItem button divider>
                  <ListItemText primary="Drafts" />
                  </ListItem>

                  <ListItem button>
                  <ListItemText primary="Trash" />
                  </ListItem>

                  <Divider light />

                  <ListItem button>
                  <ListItemText primary="Spam" />
                  </ListItem>
          </List>


      </Paper>
                        </div>

</div>







</div>
  );
}