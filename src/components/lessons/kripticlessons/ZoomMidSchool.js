import React from 'react'
import ReactPlayer from "react-player";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './LessonsKr.css';

function ZoomMidSchool() {
    return (
        <div>


<div  className="header-course-page" >

<Typography variant="h3" align="center" color="common.white" >
MID SCHOOL ZOOM CLASS
</Typography>

</div> 





<div className="py-2 px-4">
     



<div> 
<Typography variant="h5" align="center"  gutterBottom>
HERE IS THE TUTORIAL
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
  }} controls url='https://d2n3gktrd4ei3p.cloudfront.net/kriptic zoom class 3 teach.mp4' />


</div>





                         </div>   




        </div>
    )
}

export default ZoomMidSchool
