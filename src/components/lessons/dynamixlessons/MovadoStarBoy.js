import React from 'react'
import ReactPlayer from "react-player";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './Lessons.css';





function MovadoStarBoy() {
    return (
        <div>
           
           <div  className="header-course-page" >

<Typography variant="h3" align="center" color="common.white" >
MOVADO – STAR BOY
</Typography>

</div> 





<div className="py-2 px-4">
     



<div>

<Typography variant="h5" align="center" gutterBottom>
HERE IS A PREVIEW OF WHAT YOU WILL LEARN!
</Typography>

<Divider />

<div className="video-hold" > 

<ReactPlayer controls={true} url='https://youtu.be/-FYA0U8xRJw' />

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
  }} controls url='https://d2n3gktrd4ei3p.cloudfront.net/star boy teach vert.mp4' />


</div>





                         </div>   









        </div>
    )
}

export default MovadoStarBoy
