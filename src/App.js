import { withAuthenticator  } from '@aws-amplify/ui-react'
import Navbar from './components/Navbar'
import VybzKartelScortchEarth from './components/lessons/dynamixlessons/VybzKartelScortchEarth.js'
import DynamixTeam from './components/cources/dynamix/DynamixTeam'
import Belowbar from './Belowbar'
import Home from './Home'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import MovadoStarBoy from './components/lessons/dynamixlessons/MovadoStarBoy'
import KwamzAndFlavaOhemaa from './components/lessons/dynamixlessons/KwamzAndFlavaOhemaa'
import ChronixxCoolAsTheBreeze from './components/lessons/dynamixlessons/ChronixxCoolAsTheBreeze'
import TheAllianceGangster from './components/lessons/dynamixlessons/TheAllianceGangster'




function App() {
  <div className="App"></div>
  return (
    
    <div > 

       <Navbar/>


  <Router>
        <Switch>

        <Route exact path="/" >
          <Home />
          </Route>

                           /* courses routes */

          <Route  path="/dynamixteam" >
            <DynamixTeam />
          </Route>

                       /*dynamix team lessons routes */

          <Route  path="/dynamix-team-scortch-earth" >
            <VybzKartelScortchEarth />
          </Route>

          <Route  path="/dynamix-team-star-boy" >
          <MovadoStarBoy/> 
          </Route>

          <Route  path="/dynamix-team-ohemaa" >
          <KwamzAndFlavaOhemaa/>
          </Route>

          <Route  path="/dynamix-team-cool-as-the-breeze" >
          <ChronixxCoolAsTheBreeze/>
          </Route>

          
          <Route  path="/dynamix-team-gangster" >
          <TheAllianceGangster/>
          </Route>


         
        </Switch>
  </Router>


       <Belowbar/>

    </div>
 
  )
}



export default withAuthenticator(App)