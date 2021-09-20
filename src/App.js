import { withAuthenticator  } from '@aws-amplify/ui-react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import VybzKartelScortchEarth from './components/lessons/dynamixlessons/VybzKartelScortchEarth.js'


function App() {
  <div className="App"></div>
  return (
    
    <div > 

       <Navbar/>




<VybzKartelScortchEarth/>




       <Footer/>
    </div>
 
  )
}



export default withAuthenticator(App)