import React, { Component } from 'react'

export class RenderProp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    clickHandler = () => {
        this.setState(previous => {
            return { count: previous.count + 1 }
        })
    }
    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.clickHandler)}
            </div>
        )
    }
}

export default RenderProp
