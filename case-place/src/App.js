import React, {useState} from "react";
import './styles/App.scss';
import './styles/Button.scss';
import ButtonModal from "./components/ButtonModal";
import Button from "./components/Button";

function App() {
    // #TODO: Assign into local storage to prevent refire
    const [showWelcomeModal, setShowWelcomeModal] = useState(true);
    const [welcomeInfoData, setWelcomeInfoData] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className={"App"}>
            {showWelcomeModal && (
                <ButtonModal showWelcomeModal={showWelcomeModal} setShowWelcomeModal={setShowWelcomeModal}
                             buttonTitles={['Parent or Prospective Student', 'Guest', 'Current Student']}
                             welcomeInfoData={welcomeInfoData}
                             setWelcomeInfoData={setWelcomeInfoData}/>
            )}

            <Button isDisabled = {false} isLoading = {isLoading}>
                <h2>Hi this is an enabled custom button</h2>
            </Button>
        </div>
    );
}

export default App;
