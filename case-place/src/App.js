import React, {useState} from "react";
import './styles/App.scss';
import ButtonModal from "./components/ButtonModal";
import Button from "./components/Button";

function App() {
    // #TODO: Assign into local storage to prevent refire
    const [showWelcomeModal, setShowWelcomeModal] = useState(true);
    const [welcomeInfoData, setWelcomeInfoData] = useState('');
    return (
        <div className={"App"}>
            {showWelcomeModal && (
                <ButtonModal showWelcomeModal={showWelcomeModal} setShowWelcomeModal={setShowWelcomeModal}
                             buttonTitles={['Parent or Prospective Student', 'Guest', 'Current Student']}
                             welcomeInfoData={welcomeInfoData}
                             setWelcomeInfoData={setWelcomeInfoData}/>
            )}
        </div>
    );
}

export default App;
