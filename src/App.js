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
import TidalWave from './components/lessons/dynamixlessons/TidalWave'
import PullTrigga from './components/lessons/dynamixlessons/PullTrigga'
import Circulate from './components/lessons/dynamixlessons/Circulate'
import InterviewDynamix from './components/lessons/dynamixlessons/InterviewDynamix'
import BillAVibzDynamix from './components/lessons/dynamixlessons/BillAVibzDynamix'
import TwinStarzz from './components/cources/twinstarzz/TwinStarzz'




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

          <Route  path="/twinstarzz" >
            <TwinStarzz/>
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

          <Route  path="/dynamix-team-tidal-wave" >
          <TidalWave/>
          </Route>

          <Route  path="/dynamix-team-pull-trigga" >
          <PullTrigga/>
          </Route>

          <Route  path="/dynamix-team-circulate" >
          <Circulate/>
          </Route>

          <Route  path="/dynamix-team-interview" >
          <InterviewDynamix/>
          </Route>

          <Route  path="/dynamix-team-bill-a-vybz" >
          <BillAVibzDynamix/>
          </Route>

         
        </Switch>
  </Router>


       <Belowbar/>

    </div>
 
  )
}



export default withAuthenticator(App)