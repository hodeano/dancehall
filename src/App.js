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
import FlameTeam from './components/cources/flameteam/FlameTeam'
import Comepass from './components/lessons/flameteam/Comepass'
import Hi5 from './components/lessons/flameteam/Hi5'
import MasickaIWish from './components/lessons/flameteam/MasickaIWish'
import ProblemSquad from './components/cources/problemsquad/ProblemSquad'
import Swift from './components/lessons/problemsquad/Swift'
import FallaFalla from './components/lessons/problemsquad/FallaFalla'
import MixUp from './components/lessons/problemsquad/MixUp'
import ProblemSquadInterview from './components/lessons/problemsquad/ProblemSquadInterview'
import UnstoppableGeneration from './components/cources/unstoppablegeneration/UnstoppableGeneration'
import ElephantOhNahNah from './components/lessons/unstoppablegeneration/ElephantOhNahNah'
import StyloGPutEhDung from './components/lessons/unstoppablegeneration/StyloGPutEhDung'
import ChineyKRiddim from './components/lessons/unstoppablegeneration/ChineyKRiddim'
import Excellent from './components/lessons/unstoppablegeneration/Excellent'
import HandPiece from './components/lessons/unstoppablegeneration/HandPiece'
import UnstoppableGenerationInterview from './components/lessons/unstoppablegeneration/UnstoppableGenerationInterview'
import BillAVybzUnstoppable from './components/lessons/unstoppablegeneration/BillAVybzUnstoppable'
import KripticKlique from './components/cources/kripticklique/KripticKlique'
import JimmyCliffTheHarderTheyCome from './components/lessons/kripticlessons/JimmyCliffTheHarderTheyCome'
import CurrentFlow from './components/lessons/kripticlessons/CurrentFlow'
import ZoomNewSchool from './components/lessons/kripticlessons/ZoomNewSchool'
import ZoomMidSchool from './components/lessons/kripticlessons/ZoomMidSchool'
import ZoomBougleStepAndHistory from './components/lessons/kripticlessons/ZoomBougleStepAndHistory'
import ZoomSkaOldSchool from './components/lessons/kripticlessons/ZoomSkaOldSchool'
import KriptickliqueInterview from './components/lessons/kripticlessons/KriptickliqueInterview'
import MiddleSchoolDancehall from './components/cources/middleschooldancehall/MiddleSchoolDancehall'
import GimmeSpace from './components/lessons/middleschooldancehalllessons/GimmeSpace'
import WheelChair from './components/lessons/middleschooldancehalllessons/WheelChair'
import PunkRock from './components/lessons/middleschooldancehalllessons/PunkRock'
import BackOff from './components/lessons/middleschooldancehalllessons/BackOff'
import OneDance from './components/lessons/middleschooldancehalllessons/OneDance'



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

          <Route  path="/flameteam" >
            <FlameTeam/>
          </Route>

          <Route  path="/problemsquad" >
            <ProblemSquad/>
          </Route>

          <Route  path="/unstoppablegeneration" >
            <UnstoppableGeneration/>
          </Route>

          <Route  path="/kripticklique" >
            <KripticKlique/>
          </Route>

          <Route  path="/middleschooldancehall" >
            <MiddleSchoolDancehall/>
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

          /*FLAME team lessons routes */

          <Route  path="/flame-team-i-wish" >
          <MasickaIWish/>
          </Route>

          <Route  path="/flame-team-compass" >
          <Comepass/>
          </Route>


          <Route  path="/flame-team-hi5" >
          <Hi5/>
          </Route>

         
          /*problem suad lessons routes */

          <Route  path="/problem-squad-swift" >
          <Swift/>
          </Route>

          <Route  path="/problem-squad-falla-falla" >
          <FallaFalla/>
          </Route>

          <Route  path="/problem-squad-mix-up" >
          <MixUp/>
          </Route>

          <Route  path="/problem-squad-interview" >
          <ProblemSquadInterview/>
          </Route>


          /*Unstoppable generation lessons routes */


          <Route  path="/unstoppable-generation-oh-nah-nah" >
          <ElephantOhNahNah/>
          </Route>

          <Route  path="/unstoppable-generation-put-eh-dung" >
          <StyloGPutEhDung/>
          </Route>

          <Route  path="/unstoppable-generation-chiney-k-riddim" >
          <ChineyKRiddim/>
          </Route>

          <Route  path="/unstoppable-generation-excellent" >
          <Excellent/>
          </Route>

          <Route  path="/unstoppable-generation-hand-piece" >
          <HandPiece/>
          </Route>

          <Route  path="/unstoppable-generation-interview" >
          <UnstoppableGenerationInterview/>
          </Route>


          <Route  path="/unstoppable-generation-bill-a-vybz" >
          <BillAVybzUnstoppable/>
          </Route>


          /*kriptic klique lessons routes */

          <Route  path="/kriptic-klique-the-harder-they-come" >
          <JimmyCliffTheHarderTheyCome/>
          </Route>

          
          <Route  path="/kriptic-klique-current-flow" >
          <CurrentFlow/>
          </Route>

          <Route  path="/kriptic-klique-zoom-class-new-school" >
          <ZoomNewSchool/>
          </Route>

          <Route  path="/kriptic-klique-zoom-class-mid-school" >
          <ZoomMidSchool/>
          </Route>

          <Route  path="/kriptic-klique-zoom-class-bougle" >
          <ZoomBougleStepAndHistory/>
          </Route>

          <Route  path="/kriptic-klique-zoom-class-ska-and-old-school" >
          <ZoomSkaOldSchool/>
          </Route>

          <Route  path="/kriptic-klique-interview" >
          <KriptickliqueInterview/>
          </Route>

          /*MIDDLE SCHOOL DANCEHALL lessons routes */

          <Route  path="/middle-school-dancehall-gimme-space" >
          <GimmeSpace/>
          </Route>

          <Route  path="/middle-school-dancehall-wheel-chair" >
          <WheelChair/>
          </Route>

          <Route  path="/middle-school-dancehall-punk-rock" >
          <PunkRock/>
          </Route>

          <Route  path="/middle-school-dancehall-back-off" >
          <BackOff/>
          </Route>

          <Route  path="/middle-school-dancehall-one-dance" >
          <OneDance/>
          </Route>




        </Switch>
  </Router>


       <Belowbar/>

    </div>
 
  )
}



export default withAuthenticator(App)