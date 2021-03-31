import React from "react";

const ButtonModal = ({modalTitle, setShowWelcomeModal, buttonTitles, welcomeInfoData, setWelcomeInfoData}) => {
    const onButtonClickHandler = (title) => {
        setShowWelcomeModal(false);
        setWelcomeInfoData(title);
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
