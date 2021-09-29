import React from 'react'
import ReactPlayer from "react-player";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './LessonsU.css';

function BillAVybzUnstoppable() {
    return (
        <div>



<div  className="header-course-page" >

<Typography variant="h3" align="center" color="common.white" >
Bill A Vibe / Warm-Up
</Typography>

</div> 





<div className="py-2 px-4">
     



<div> 
<Typography variant="h5" align="center"  gutterBottom>
Vibe With Us [ simon say ]
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
  }} controls url='https://d2n3gktrd4ei3p.cloudfront.net/sparta teacha.mp4' />


</div>



                         </div>   





        </div>
    )
}

export default BillAVybzUnstoppable
