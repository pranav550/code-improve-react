import React, { Component } from 'react'

export class ChildLifeCycle extends Component {
    constructor() {
        console.log("------------ConstructorChildLifeCycle--------------");
        super();
        this.state = {
            firstname: "test"
        }
    }

    static getDerivedStateFromProps(state, props) {
        console.log(state, props)
        console.log("--------------getDrivedStateFromPropsChildLifeCycle----------------")
        return null;
    }

    componentDidMount() {
        console.log("---------------componentDidMountChildLifeCycle---------------")
    }

    componentWillUnmount() {
        alert("yesssss")
        console.log("--------------componentWillUnmount-----------------")
    }
    render() {
        console.log("--------------RenderChildLifeCycle----------------")
        return (
            <div>
                ChildLifeCycle
            </div>
        )
    }
}

export default ChildLifeCycle
