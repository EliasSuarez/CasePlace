import React from "react"

class Button extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        if (this.props.isLoading) {
            return (
                <button className = {"mybutton"}>Loading...</button>
            )  
        } else if (this.props.isDisabled) { //this just means nothing happens when the button is clicked. It's still visible.
            return (
                <button className = {"mybutton"}>{this.props.children}</button>
            )
        } else {
            //the button is clickable
            return (
                <button 
                    className = {"mybutton"} 
                    onClick = {this.props.handleClick} 
                    onMouseOver = {this.props.handleMouseOver}
                >
                    {this.props.children} 
                </button>
            )
        } 

    }

}




export default Button