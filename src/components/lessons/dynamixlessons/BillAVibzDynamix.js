import React from 'react'
import ReactPlayer from "react-player";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './Lessons.css';

function BillAVibzDynamix() {
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
Vibe With Us [ Teacha ]
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
  }} controls url='https://d2n3gktrd4ei3p.cloudfront.net/dynamix team teacha final.mp4' />


</div>




<br/>






<div> 
<Typography variant="h5" align="center"  gutterBottom>
Vibe With Us [ FREESTYLE ]
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
  }} controls url='https://d2n3gktrd4ei3p.cloudfront.net/dynamix team bill a vibe freestyle.mp4' />


</div>






<br/>







<div> 
<Typography variant="h5" align="center"  gutterBottom>
Vibe with Us 2 [ Teacha ]
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
  }} controls url='https://d2n3gktrd4ei3p.cloudfront.net/dynamix team teacha 2 second.mp4' />


</div>






                         </div>   




        </div>
    )
}

export default BillAVibzDynamix
