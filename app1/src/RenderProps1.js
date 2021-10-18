import React, { Component } from 'react'

export class RenderProps1 extends Component {


    render() {
        return (
            <div>
                <p>{this.props.count}</p>
                <button onClick={() => this.props.clickHandler()}>ClickFirst</button>
            </div>
        )
    }
}

export default RenderProps1
