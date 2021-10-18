import React, { Component } from 'react'

export class ThreeDot extends Component {
    constructor(props) {
        super(props)

        this.state = {
            names: ['rahul', 'ramesh', 'ram', 'Mahesh'],
            users: ['ravi', 'chetan', 'pranav'],
            lists: [
                { id: 1, code: 'AD' },
                { id: 2, code: 'AS' },
                { id: 3, code: 'Az' },
                { id: 4, code: 'AV' },
            ]
        }
    }

    render() {
        const [first, ...last] = this.state.names;
        console.log(first)
        console.log(last)
        const record = { ...this.state, empDetail: '123455', dummy: [1, 2, 3] }
        console.log(record)
        const allNames = ['first', ...this.state.names, 'middle', ...this.state.users, 'last'];
        console.log(allNames);
        const [firstinfo, secondinfo] = this.state.lists;
        console.log(firstinfo);
        console.log(secondinfo)
        return (
            <div>
                Three Dot
            </div>
        )
    }
}

export default ThreeDot
