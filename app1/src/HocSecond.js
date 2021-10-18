import React, { Component } from 'react'
import Wrapper from './Wrapper';

export class HocSecond extends Component {
    render() {
        return (
            <div>
                <p>{this.props.count}</p>
                <p>{this.props.name}</p>
                <button onMouseEnter={() => this.props.clickHandler()}>AddSecond</button>
            </div>
        )
    }
}

export default Wrapper(HocSecond, 10);
