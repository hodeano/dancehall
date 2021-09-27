import React from 'react'
import ReactPlayer from "react-player";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './Lessons.css';






function ChronixxCoolAsTheBreeze() {
    return (
        <div>
            

            <div  className="header-course-page" >

<Typography variant="h3" align="center" color="common.white" >
CHRONIXX – COOL AS THE BREEZE
</Typography>

</div> 





<div className="py-2 px-4">
     



<div>

<Typography variant="h5" align="center" gutterBottom>
HERE IS A PREVIEW OF WHAT YOU WILL LEARN!
</Typography>

<Divider />

<div className="video-hold" > 

<ReactPlayer controls={true} url='https://youtu.be/mzbVd0gOhqI' />

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
  }} controls url='https://d2n3gktrd4ei3p.cloudfront.net/cool as the breeze teach.mp4' />


</div>





                         </div>   









        </div>
    )
}

export default ChronixxCoolAsTheBreeze
