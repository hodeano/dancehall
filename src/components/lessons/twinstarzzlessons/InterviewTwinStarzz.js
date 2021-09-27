import React from 'react'
import ReactPlayer from "react-player";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './LessonsT.css';



function InterviewTwinStarzz() {
    return (
        <div>
            


            <div  className="header-course-page" >

<Typography variant="h3" align="center" color="common.white" >
 INTERVIEW WITH TWIN STARZZ
</Typography>

</div> 





<div className="py-2 px-4">
     



<div> 
<Typography variant="h5" align="center"  gutterBottom>
LISA TWIN STARZZ INTERVIEW
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
  }} controls url='https://d2n3gktrd4ei3p.cloudfront.net/lisa interview jalegends.mp4' />


</div>




<br/>






<div> 
<Typography variant="h5" align="center"  gutterBottom>
ALII TWIN STARZZ INTERVIEW
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
  }} controls url='https://d2n3gktrd4ei3p.cloudfront.net/twinstarz alii jalegends interviewe.mp4' />


</div>




                         </div>   



        </div>
    )
}

export default InterviewTwinStarzz
