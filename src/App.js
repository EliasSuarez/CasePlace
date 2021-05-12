import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import ButtonModal from "./components/ButtonModal";
import * as ButtonTitle from "./util/ButtonTitles.js";
import { PinData } from "./util/SampleMapPinData.js";
import Map from "./components/Map.js";

function App() {
  // #TODO: Assign into local storage to prevent refire
  const [modalSelection, setModalSelection] = useState("Welcome");
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showProspySeekingModal, setShowProspySeekingModal] = useState(false);
  const [showStudentSeekingModal, setShowStudentSeekingModal] = useState(false);
  const [showGuestSeekingModal, setShowGuestSeekingModal] = useState(false);
  const [showAccordion, setShowAccordion] = useState(true);
  const [locations, setLocations] = useState(PinData);
  const [loc, setLoc] = useState(ButtonTitle.CampusSeeking);

  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (modalSelection) {
      case ButtonTitle.ProspyWelcome:
        setShowProspySeekingModal(true);
        break;
      case ButtonTitle.GuestWelcome:
        setShowGuestSeekingModal(true);
        break;
      case ButtonTitle.CurrentStudentWelcome:
        setShowStudentSeekingModal(true);
        break;
      case "Welcome":
        setShowWelcomeModal(true);
        break;
      default:
        setLoc(modalSelection);
        break;
    }
  }, [modalSelection]);

  const modalActive =
    showWelcomeModal ||
    showProspySeekingModal ||
    showGuestSeekingModal ||
    showStudentSeekingModal;

  return (
    <div className={"App"}>
      <Map loc={loc} setLoc={setLoc} />
      <div className={modalActive ? "dim-background" : ""} />
      {showWelcomeModal && (
        <ButtonModal
          modalTitle={"I am a"}
          setShowModal={setShowWelcomeModal}
          buttonTitles={[
            ButtonTitle.ProspyWelcome,
            ButtonTitle.GuestWelcome,
            ButtonTitle.CurrentStudentWelcome,
          ]}
          setModalSelection={setModalSelection}
        />
      )}

      {showProspySeekingModal && (
        <ButtonModal
          modalTitle={"I'm looking for"}
          setShowModal={setShowProspySeekingModal}
          buttonTitles={[
            ButtonTitle.CampusSeeking,
            ButtonTitle.FoodSeeking,
            ButtonTitle.TransportationSeeking,
            ButtonTitle.Back
          ]}
          setModalSelection={setModalSelection}
        />
      )}

      {showStudentSeekingModal && (
        <ButtonModal
          modalTitle={"I'm looking for"}
          setShowModal={setShowStudentSeekingModal}
          buttonTitles={[
            ButtonTitle.CampusSeeking,
            ButtonTitle.ClubsSeeking,
            ButtonTitle.HealthServicesSeeking,
            ButtonTitle.StudentServicesSeeking,
            ButtonTitle.ShoppingSeeking,
            ButtonTitle.StudySeeking,
            ButtonTitle.Back
          ]}
          setModalSelection={setModalSelection}
        />
      )}

      {showGuestSeekingModal && (
        <ButtonModal
          modalTitle={"I'm looking for"}
          setShowModal={setShowGuestSeekingModal}
          buttonTitles={[
            ButtonTitle.CampusSeeking,
            ButtonTitle.FoodSeeking,
            ButtonTitle.TransportationSeeking,
            ButtonTitle.Back
          ]}
          setModalSelection={setModalSelection}
        />
      )}
    </div>
  );
}

export default App;
