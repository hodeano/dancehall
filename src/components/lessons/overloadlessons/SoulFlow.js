import React from 'react'
import ReactPlayer from "react-player";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './LessonsO.css';



function SoulFlow() {
    return (
        <div>
            


            <div  className="header-course-page" >

<Typography variant="h3" align="center" color="common.white" >
SOUL FLOW
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
  }} controls url='https://d2n3gktrd4ei3p.cloudfront.net/overload skankaz ina mi feelings step teach.mp4' />


</div>





                         </div>   



        </div>
    )
}

export default SoulFlow
