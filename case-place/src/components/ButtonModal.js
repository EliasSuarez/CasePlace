import React from "react";

const ButtonModal = ({setShowWelcomeModal, buttonTitles, welcomeInfoData, setWelcomeInfoData}) => {
    const onButtonClickHandler = (title) => {
        console.log(title);
        setShowWelcomeModal(false);
        setWelcomeInfoData(title);
    }

    return (
        <div className={"buttonContainer"}>
            {buttonTitles.map((title) => {
                return (
                    <button onClick={() => onButtonClickHandler(title)} key={title}>
                        {title}
                    </button>)
            })}
        </div>

    );}

    export default ButtonModal;
