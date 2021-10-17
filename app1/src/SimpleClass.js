import React, { PureComponent, Component } from 'react'
import Memo from './Memo';

export class SimpleClass extends Component {
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
        console.log('yes called')
        return (
            <div>
                <Memo name="Ravi" />
                {this.state.name}
                <p><button onClick={() => this.updateData()}>Update</button></p>
            </div>
        )
    }
}

export default SimpleClass
