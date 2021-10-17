import React, { Component } from 'react';
import ChildLifeCycle from './ChildLifeCycle';
export class LifeCycle extends Component {
    constructor() {
        console.log("------------Constructor--------------");
        super();
        this.state = {
            firstname: "test",
            show: true
        }

        this.updateData = this.updateData.bind(this);
        this.deleteData = this.deleteData.bind(this);
    }

    static getDerivedStateFromProps(state, props) {
        console.log(state, props)
        console.log("--------------getDrivedStateFromProps----------------")
        return null;
    }

    componentDidMount() {
        console.log("---------------componentDidMount---------------")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        console.log("----------------shouldComponentUpdate--------------")
        return true;
    }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log(previousProps, previousState)
        console.log("---------------getSnapshotBeforeUpdate---------------")
        return true;
    }

    componentDidUpdate(previousProps, previousState, snapshot) {
        console.log(previousProps, previousState, snapshot)
        console.log("---------------componentDidUpdate---------------")
    }

    updateData() {
        this.setState({
            firstname: 'Code Improve',

        })
    }

    deleteData() {
        this.setState({
            show: false
        })
    }
    render() {
        console.log("--------------Render----------------")
        return (
            <div>
                {
                    (this.state.show) ? <ChildLifeCycle /> : <h1>Deleted</h1>
                }
                {/* <ChildLifeCycle /> */}
                LifeCycle
                <h1>{this.state.firstname}</h1>
                <p><button onClick={this.updateData}>Update</button></p>
                <p><button onClick={this.deleteData}>Delete</button></p>
            </div>
        )
    }
}

export default LifeCycle
