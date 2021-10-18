import React, { Component } from 'react'
import Wrapper from './Wrapper';

export class HocFirst extends Component {

    render() {
        return (
            <div>
                <p>{this.props.count}</p>
                <p>{this.props.name}</p>
                <button onClick={() => this.props.clickHandler()}>AddFirst</button>
            </div>
        )
    }
}

export default Wrapper(HocFirst, 5);
