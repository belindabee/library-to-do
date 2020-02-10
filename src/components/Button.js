import React from "react"

class Button extends React.Component {
    render() {
        return(
            <div>
            <button onClick={this.props.button}>click Me</button>
            <button onClick={this.props.minus}>Click Me Please!</button>
            <button onClick={this.props.mu} >kali saya</button>
            <button onClick={this.props.divi}>bagi saya</button>
            </div>

        )
    }
}
export default Button