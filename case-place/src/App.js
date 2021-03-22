import React, {useState} from "react";
import './styles/App.scss';
import ButtonModal from "./components/ButtonModal";

function App() {
    // #TODO: Assign into local storage to prevent refire
    const [showWelcomeModal, setShowWelcomeModal] = useState(true);
    const [welcomeInfoData, setWelcomeInfoData] = useState('');
    return (
        <div className={"App"}>
            <h1>Show</h1>
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
