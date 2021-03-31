import React from "react";
import {ProspyWelcome, GuestWelcome, CurrentStudentWelcome} from "../util/ButtonTitles.js";

const ButtonModal = ({modalTitle, setShowWelcomeModal, buttonTitles, welcomeInfoData, setWelcomeInfoData, setShowProspySeekingModal}) => {
    const onButtonClickHandler = (title) => {
        setShowWelcomeModal(false);
        //setWelcomeInfoData(title);
        if(title === ProspyWelcome){
            setShowProspySeekingModal(true);
        }
    }

    return (
        <div className={"buttonContainer"}>
        <h1>{modalTitle}</h1>
            {buttonTitles.map((title) => {
                return (
                    <button onClick={() => onButtonClickHandler(title)} key={title}>
                        {title}
                    </button>)
            })}
        </div>

    );
}

export default ButtonModal;
