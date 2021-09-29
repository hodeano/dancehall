import React from 'react'
import ReactPlayer from "react-player";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './LessonsU.css';
function UnstoppableGenerationInterview() {
    return (
        <div>
            


            <div  className="header-course-page" >

<Typography variant="h3" align="center" color="common.white" >
 INTERVIEW WITH UNSTOPPABLE
</Typography>

</div> 





<div className="py-2 px-4">
     



<div> 
<Typography variant="h5" align="center"  gutterBottom>
SPARTA INTERVIEW
</Typography>

<Divider />

</div>


<div className="player-rap"> 
     

<ReactPlayer config={{
 file: {
attributes: {
onContextMenu: e => e.preventDefault(),
controlsList: 'nodownload'
}
}
  }} controls url='https://d2n3gktrd4ei3p.cloudfront.net/sparta interview full.mp4' />


</div>




                         </div>   






        </div>
    )
}

export default UnstoppableGenerationInterview
