import { withAuthenticator  } from '@aws-amplify/ui-react'
import Navbar from './components/Navbar'
import VybzKartelScortchEarth from './components/lessons/dynamixlessons/VybzKartelScortchEarth.js'
import DynamixTeam from './components/cources/dynamix/DynamixTeam'
import Belowbar from './Belowbar'
import Home from './components/Home'



function App() {
  <div className="App"></div>
  return (
    
    <div > 

       <Navbar/>

        <Home/>

       <Belowbar/>

    </div>
 
  )
}



export default withAuthenticator(App)