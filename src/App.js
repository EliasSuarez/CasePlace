import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import ButtonModal from "./components/ButtonModal";
import Accordion from "./components/Accordion";
import * as ButtonTitle from "./util/ButtonTitles.js";
import { PinData } from "./util/SampleMapPinData.js";

function App() {
  // #TODO: Assign into local storage to prevent refire
  const [modalSelection, setModalSelection] = useState("Welcome");
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showProspySeekingModal, setShowProspySeekingModal] = useState(false);
  const [showStudentSeekingModal, setShowStudentSeekingModal] = useState(false);
  const [showGuestSeekingModal, setShowGuestSeekingModal] = useState(false);
  const [showAccordion, setShowAccordion] = useState(true);
  const [locations, setLocations] = useState(PinData);

  
  useEffect(() => {
    // eslint-disable-next-line default-case
    switch (modalSelection) {
      case ButtonTitle.ProspyWelcome:
        setShowProspySeekingModal(false);
        break;
      case ButtonTitle.GuestWelcome:
        setShowGuestSeekingModal(false);
        break;
      case ButtonTitle.CurrentStudentWelcome:
        setShowStudentSeekingModal(false);
        break;
      case "":
        setShowWelcomeModal(false);
        break;
      default:
        // Eventually we want default to go to the map
        setShowWelcomeModal(false);
    }
  }, [modalSelection]);
  

  const modalActive =
    showWelcomeModal ||
    showProspySeekingModal ||
    showGuestSeekingModal ||
    showStudentSeekingModal;

  return (
    <div className={"App"}>
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
          modalTitle={"What Would You Like to Do?"}
          setShowModal={setShowProspySeekingModal}
          buttonTitles={[
            ButtonTitle.CampusSeeking,
            ButtonTitle.FoodSeeking,
            ButtonTitle.DirectionsSeeking,
            ButtonTitle.TransportationSeeking,
          ]}
          setModalSelection={setModalSelection}
        />
      )}

      {showStudentSeekingModal && (
        <ButtonModal
          modalTitle={"I'm looking for"}
          setShowModal={setShowStudentSeekingModal}
          buttonTitles={[
            ButtonTitle.CampusBuildingSeeking,
            ButtonTitle.ClubsSeeking,
            ButtonTitle.HealthServicesSeeking,
            ButtonTitle.StudentServicesSeeking,
            ButtonTitle.ShoppingSeeking,
            ButtonTitle.StudySeeking,
          ]}
          setModalSelection={setModalSelection}
        />
      )}

      {showGuestSeekingModal && (
        <ButtonModal
          modalTitle={"What Would You Like to Do?"}
          setShowModal={setShowGuestSeekingModal}
          buttonTitles={[
            ButtonTitle.CampusSeeking,
            ButtonTitle.FoodSeeking,
            ButtonTitle.DirectionsSeeking,
            ButtonTitle.TransportationSeeking,
          ]}
          setModalSelection={setModalSelection}
        />
      )}

      {showAccordion && (
        <Accordion pins = {locations} />

        )
      }
    </div>
  );
}

export default App;
