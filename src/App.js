import React, {useState} from "react";
import './styles/App.scss';
import ButtonModal from "./components/ButtonModal";
import * as ButtonTitle from "./util/ButtonTitles.js";

function App() {
    // #TODO: Assign into local storage to prevent refire
    // #TODO: Change props; need current previous and next modal information without a ton of indidiual props
    const [showWelcomeModal, setShowWelcomeModal] = useState(true);
    const [welcomeInfoData, setWelcomeInfoData] = useState('');
    const [showProspySeekingModal, setShowProspySeekingModal] = useState(false);
    const modalActive = showWelcomeModal || showProspySeekingModal; 

    return (
        <div className={"App"}>
            <div className={modalActive ? 'dim-background' : ''}/>
            {showWelcomeModal && (
                <ButtonModal modalTitle={'I am a'} showWelcomeModal={showWelcomeModal}
                             setShowWelcomeModal={setShowWelcomeModal}
                             buttonTitles={[ButtonTitle.ProspyWelcome, ButtonTitle.GuestWelcome, ButtonTitle.CurrentStudentWelcome]}
                             welcomeInfoData={welcomeInfoData}
                             setWelcomeInfoData={setWelcomeInfoData}
                             setShowProspySeekingModal={setShowProspySeekingModal}/>
            )}

            {showProspySeekingModal && (
                <ButtonModal modalTitle={'What Would You Like to Do?'} showWelcomeModal={showWelcomeModal}
                             setShowWelcomeModal={setShowWelcomeModal}
                             buttonTitles={[ButtonTitle.CampusSeeking, ButtonTitle.FoodSeeking, ButtonTitle.DirectionsSeeking, ButtonTitle.TransportationSeeking]}
                             welcomeInfoData={welcomeInfoData}
                             setWelcomeInfoData={setWelcomeInfoData}
                             setShowProspySeekingModal={setShowProspySeekingModal}/>
            )}

        </div>
    );
}

export default App;
