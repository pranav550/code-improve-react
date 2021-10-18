import React, { Component } from 'react'

export default class UnControlled extends Component {
    constructor(props) {
        super(props)
        this.fnameRef = React.createRef()
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.fnameRef.current.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="">Name</label>
                    <input type="text" name="firstname" ref={this.fnameRef} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
