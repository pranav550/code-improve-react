import React, { PureComponent, Component } from 'react'


export class PureCompo extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: 'code'
        }
    }

    updateData() {
        this.setState({
            name: 'test'
        })
    }

    render() {
        console.log('yes')
        return (
            <div>
                {this.state.name}
                <p><button onClick={() => this.updateData()}>Update</button></p>
            </div>
        )
    }
}

export default PureCompo
