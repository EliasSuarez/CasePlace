import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import ButtonModal from "./components/ButtonModal";
import * as ButtonTitle from "./util/ButtonTitles.js";
import "./App.css";
import Map from "./components/Map.js";

function App() {
  // #TODO: Assign into local storage to prevent refire
  const [modalSelection, setModalSelection] = useState("Welcome");
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showProspySeekingModal, setShowProspySeekingModal] = useState(false);
  const [showStudentSeekingModal, setShowStudentSeekingModal] = useState(false);
  const [showGuestSeekingModal, setShowGuestSeekingModal] = useState(false);
  const [loc, setLoc] = useState("CSE");

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
    </div>
  );
}

export default App;
