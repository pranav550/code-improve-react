import React, { Component } from 'react'

class RefsChild extends Component {
    constructor(props) {
        super(props)
        this.email = React.createRef();
        this.state = {
            phoneNo: "786878978"
        }
    }

    focusData() {
        this.email.current.focus();
    }

    render() {
        return (
            <div>
                <input type="text" name="email" value="Child" ref={this.email} readOnly />
                <button onClick={() => { this.focusData() }}>FocusData</button>
            </div>
        )
    }
}

export default RefsChild
