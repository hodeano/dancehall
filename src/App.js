import { withAuthenticator  } from '@aws-amplify/ui-react'
import Navbar from './components/Navbar'
import VybzKartelScortchEarth from './components/lessons/dynamixlessons/VybzKartelScortchEarth.js'
import DynamixTeam from './components/cources/dynamix/DynamixTeam'
import Belowbar from './Belowbar'


function App() {
  <div className="App"></div>
  return (
    
    <div > 

       <Navbar/>




<DynamixTeam/>

<Belowbar/>

    </div>
 
  )
}



export default withAuthenticator(App)