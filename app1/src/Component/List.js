import React, { Component } from 'react'

export default class List extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <h1>List Page</h1>
            </div>
        )
    }
}
