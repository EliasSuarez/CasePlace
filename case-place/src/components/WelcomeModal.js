import React from "react"
import ButtonModal from "./ButtonModal"

class WelcomeModal extends React.Component {
    render() {
        this.props.setShowWelcomeModal(true)

        return (
            <div>
                <header>
                    <h1>Welcome to CasePlace</h1>
                </header>

                <main>
                    <p>We're here to help you find your place among the CWRU community</p>
                    <ButtonModal buttonTitles = {["Let's Go"]}/>
                </main>

                <footer>
                    <p>Skip for Now</p>
                </footer>
            </div>
        )
    }
}

export default WelcomeModal