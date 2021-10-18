import React, { Component } from 'react'

export class RenderProps2 extends Component {


    render() {
        return (
            <div>
                <p>{this.props.count}</p>
                <button onMouseEnter={() => this.props.clickHandler()}>ClickSecond</button>
            </div>
        )
    }
}

export default RenderProps2
