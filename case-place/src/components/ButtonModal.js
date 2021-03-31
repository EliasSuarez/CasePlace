import React from "react";

const ButtonModal = ({setShowWelcomeModal, buttonTitles, welcomeInfoData, setWelcomeInfoData}) => {
    const onButtonClickHandler = (title) => {
        setShowWelcomeModal(false);
        setWelcomeInfoData({title: welcomeInfoData.title, selection: title});
    }

    return (
        <div className={"buttonContainer"}>
        <h1>{welcomeInfoData.title}</h1>
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
