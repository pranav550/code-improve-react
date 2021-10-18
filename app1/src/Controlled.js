import React, { Component } from 'react'

export default class Controlled extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    formHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.formHandler} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
