import React from "react";

const ButtonModal = ({
  modalTitle,
  setShowModal,
  buttonTitles,
  setModalSelection,
}) => {
  const onButtonClickHandler = (title) => {
    setShowModal(false);
    setModalSelection(title);
  };

  return (
    <div className={"buttonContainer"}>
      <h1>{modalTitle}</h1>
      {buttonTitles.map((title) => {
        return (
          <button onClick={() => onButtonClickHandler(title)} key={title}>
            {title}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonModal;
