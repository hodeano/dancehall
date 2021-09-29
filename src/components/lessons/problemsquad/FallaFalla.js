import React from 'react'
import ReactPlayer from "react-player";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './LessonsP.css';

function FallaFalla() {
    return (
        <div>
            

            <div  className="header-course-page" >

<Typography variant="h3" align="center" color="common.white" >
FALLA FALLA
</Typography>

</div> 





<div className="py-2 px-4">
     



<div>

<Typography variant="h5" align="center" gutterBottom>
HERE IS A PREVIEW OF WHAT YOU WILL LEARN!
</Typography>

<Divider />

<div className="video-hold" > 

<ReactPlayer controls={true} url='https://youtu.be/aBXfxik3Zdk' />

</div>



</div>




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
  }} controls url='https://jalegendsclass.s3.us-east-2.amazonaws.com/lee+problem++FALLA+FALLA+TEACH.mp4' />


</div>





                         </div>   




        </div>
    )
}

export default FallaFalla
