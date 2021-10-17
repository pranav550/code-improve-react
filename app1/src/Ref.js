import React, { Component } from 'react'
import RefsChild from "./RefsChild";
import RefFn from './RefFn'
export default class Ref extends Component {
    constructor(props) {
        super(props)
        this.fnameRef = React.createRef();
        this.lnameRef = React.createRef();
        this.childCompRef = React.createRef();
        this.fnRef = React.createRef();
        this.state = {

        }
    }

    getData() {
        console.log(this.fnameRef)
        console.log(this.fnameRef.current)
        console.log(this.fnameRef.current.value)
        this.fnameRef.current.value = "testData";
        this.fnameRef.current.focus();
        this.lnameRef.current.value = "verma";
        this.lnameRef.current.focus();
        console.log(this.childCompRef)
        console.log(this.childCompRef.current)
        this.childCompRef.current.focusData();
        this.fnRef.current.focus();
    }

    render() {
        return (
            <div>
                <RefsChild name="tests" ref={this.childCompRef} />
                <h1>Refs</h1>
                <RefFn ref={this.fnRef} />
                <input type="text" name="fname" className="myclass" id="fnameid" value="Code improve" ref={this.fnameRef} readOnly />
                <input type="text" name="lname" className="myclass1" id="lnameid" value="improve" ref={this.lnameRef} readOnly />
                <button onClick={() => this.getData()}>ADD</button>
            </div>
        )
    }
}
