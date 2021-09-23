import React from 'react'
import CourseGrid from './components/courcescards/CourseGrid'
import Typography from '@mui/material/Typography';

function Home() {
    return (
        <div>
            
             <div className="overload-shot">
             <img src="https://d3cjsf0o8cd718.cloudfront.net/dynamixx%20team%20header.jpg" />
             </div>

             <br/>
            <Typography variant="h3" align="left">
               ALL COURSES
            </Typography>

            <CourseGrid/>




        </div>
    )
}

export default Home
