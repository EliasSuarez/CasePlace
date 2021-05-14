import React from "react";
import { Back } from "../util/ButtonTitles";

const ButtonModal = ({
  modalTitle,
  setShowModal,
  buttonTitles,
  setModalSelection,
}) => {
  const onButtonClickHandler = (title) => {
    setShowModal(false);
    if(title === Back)
      setModalSelection("Welcome");
    else
      setModalSelection(title);
  };

  return (
    <div className={"buttonContainer"}>
      <h1>{modalTitle}</h1>
      {buttonTitles.map((title) => {
        if(title !== Back){
          return (
            <button onClick={() => onButtonClickHandler(title)} key={title}>
              {title}
            </button>
          );
        }
        else{
          return (
            <button className={"backButton"} onClick={() => onButtonClickHandler(title)} key={title}>
              {title}
            </button>
          );
        }
      })}
    </div>
  );
};

export default ButtonModal;
