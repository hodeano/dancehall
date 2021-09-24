import { withAuthenticator  } from '@aws-amplify/ui-react'
import Navbar from './components/Navbar'
import VybzKartelScortchEarth from './components/lessons/dynamixlessons/VybzKartelScortchEarth.js'
import DynamixTeam from './components/cources/dynamix/DynamixTeam'
import Belowbar from './Belowbar'
import Home from './Home'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';




function App() {
  <div className="App"></div>
  return (
    
    <div > 

       <Navbar/>


  <Router>
        <Switch>

          <Route path="/" exact>
            <DynamixTeam />
          </Route>

         
        </Switch>
  </Router>


       <Belowbar/>

    </div>
 
  )
}



export default withAuthenticator(App)