import React from 'react'
import ReactPlayer from "react-player";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './Lessons.css';


function InterviewDynamix() {
    return (
        <div>
            

            <div  className="header-course-page" >

<Typography variant="h3" align="center" color="common.white" >
 INTERVIEW WITH DYNAMIX TEAM
</Typography>

</div> 





<div className="py-2 px-4">
     



<div> 
<Typography variant="h5" align="center"  gutterBottom>
Oshane Dynamix Interview 
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
  }} controls url='https://d2n3gktrd4ei3p.cloudfront.net/oshane interview.mp4' />


</div>




<br/>






<div> 
<Typography variant="h5" align="center"  gutterBottom>
Nick Dynamix Interview 
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
  }} controls url='https://d2n3gktrd4ei3p.cloudfront.net/nick interview final.mp4' />


</div>






<br/>







<div> 
<Typography variant="h5" align="center"  gutterBottom>
Ryan Dynamix Interview 
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
  }} controls url='https://d2n3gktrd4ei3p.cloudfront.net/ryan interview.mp4' />


</div>






                         </div>   





        </div>
    )
}

export default InterviewDynamix
