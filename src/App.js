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
import AidoniaTipPonYuhToe from './components/lessons/twinstarzzlessons/AidoniaTipPonYuhToe'
import RdxJaw from './components/lessons/twinstarzzlessons/RdxJaw'
import SpiceGum from './components/lessons/twinstarzzlessons/SpiceGum'
import SlapIt from './components/lessons/twinstarzzlessons/SlapIt'
import WildThoughts from './components/lessons/twinstarzzlessons/WildThoughts'
import BoomItUp from './components/lessons/twinstarzzlessons/BoomItUp'
import Ben from './components/lessons/twinstarzzlessons/Ben'
import Wiper from './components/lessons/twinstarzzlessons/Wiper'
import InterviewTwinStarzz from './components/lessons/twinstarzzlessons/InterviewTwinStarzz'
import OverloadSkankaz from './components/cources/overloadskankaz/OverloadSkankaz'
import RyticalCookieJar from './components/lessons/overloadlessons/RyticalCookieJar'
import SeanPaulLikeGlue from './components/lessons/overloadlessons/SeanPaulLikeGlue'
import SeanPaulScorcha from './components/lessons/overloadlessons/SeanPaulScorcha'
import WayneVacancy from './components/lessons/overloadlessons/WayneVacancy'
import InnaMiFeelings from './components/lessons/overloadlessons/InnaMiFeelings'
import SoulFlow from './components/lessons/overloadlessons/SoulFlow'




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

          <Route  path="/overloadskankaz" >
            <OverloadSkankaz/>
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


                        /*twin starzz lessons routes */

          <Route  path="/twin-starzz-tip-pan-yuh-toe" >
          <AidoniaTipPonYuhToe/>
          </Route>

          <Route  path="/twin-starzz-jaw" >
          <RdxJaw/>
          </Route>

          <Route  path="/twin-starzz-gum" >
          <SpiceGum/>
          </Route>

          <Route  path="/twin-starzz-slap-it" >
          <SlapIt/>
          </Route>

          <Route  path="/twin-starzz-wild-thoughts" >
          <WildThoughts/>
          </Route>

          <Route  path="/twin-starzz-boom-it-up" >
          <BoomItUp/>
          </Route>

          <Route  path="/twin-starzz-ben" >
          <Ben/>
          </Route>

          <Route  path="/twin-starzz-wiper" >
          <Wiper/>
          </Route>

          <Route  path="/twin-starzz-interview" >
          <InterviewTwinStarzz/>
          </Route>



          /*overload skankaz lessons routes */

          <Route  path="/overload-skankaz-cookie-jar" >
          <RyticalCookieJar/>
          </Route>

          <Route  path="/overload-skankaz-like-glue" >
          <SeanPaulLikeGlue/>
          </Route>

          <Route  path="/overload-skankaz-scorcha" >
          <SeanPaulScorcha/>
          </Route>

          <Route  path="/overload-skankaz-vacancy" >
          <WayneVacancy/>
          </Route>

          <Route  path="/overload-skankaz-inna-mi-feelings" >
          <InnaMiFeelings/>
          </Route>

          <Route  path="/overload-skankaz-soul-flow" >
          <SoulFlow/>
          </Route>






         
        </Switch>
  </Router>


       <Belowbar/>

    </div>
 
  )
}



export default withAuthenticator(App)