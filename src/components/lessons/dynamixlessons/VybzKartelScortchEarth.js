import React from 'react'
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './Lessons.css';





function VybzKartelScortchEarth() {
    let playedSeconds = 0;
      const [Seconds, setSeconds] = useState(playedSeconds);
      const [currentVideo, setCurrentVideo] = useState(0);
      const [link, setLink] = useState([
        `https://d2n3gktrd4ei3p.cloudfront.net/earth%20teach%20vert.mp4`,

     
      ]);
    
      const playNextVideo = () => {
        if (currentVideo + 1 < link.length) {
          let current = currentVideo + 1;
          setCurrentVideo(current);
        } else {
          setCurrentVideo(0);
        }
        addTimer();
      };
      const addTimer = () => {
        setSeconds(`?start=${playedSeconds}`);
        let array = [...link];
        setLink([...array]);
      };
    
      const onProgress = (video) => {
        if (playedSeconds < Math.round(video.playedSeconds)) {
          playedSeconds = Math.round(video.playedSeconds);
        }
      };
    
      useEffect(() => {
        addTimer();
      }, []);
    
    



    return (
        <div>



                 <div  className="header-course-page" >

                 <Typography variant="h3" align="center" color="common.white" >
                 Vybz Kartel - Scorth Earth
                 </Typography>

                 </div> 





         <div className="py-2 px-4">
     



     <div>

             <Typography variant="h5" align="center" gutterBottom>
                 HERE IS A PREVIEW OF WHAT YOU WILL LEARN!
              </Typography>

              <Divider />

              <div className="video-hold" > 

              <ReactPlayer controls={true} url='https://youtu.be/xmdGpN6k9fM' />

              </div>
              


     </div>




     <div> 
            <Typography variant="h5" align="center"  gutterBottom>
                HERE IS THE TUTORIAL
            </Typography>

             <Divider />

     </div>


        <div className="player-rap"> 
          <ReactPlayer 
 
          controls
          playing={true} 

          url={link[currentVideo] + Seconds}
          onProgress={(ev) => onProgress(ev)}

         config={{
         file: {
         attributes: {
         onContextMenu: e => e.preventDefault(),
         controlsList: 'nodownload'
      }
     }
   }}
         />





          </div>


              <div className="switch-button" >  
                  <Button className="btn btn-primary" onClick={playNextVideo} variant="contained" color="primary"  fullWidth="true"  >
                      switch view 
                   </Button>
             </div>



       
                         </div>   


        </div>
    )
}

export default  VybzKartelScortchEarth 


