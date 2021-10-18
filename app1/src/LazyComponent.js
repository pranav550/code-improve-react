import React, { Component } from 'react'

export default class LazyComponent extends Component {
    render() {
        var str = '';
        for (let i = 0; i < 100000000; i++) {
            str = i;
        }
        return (
            <div>
                <h1>Lazy loading</h1>
                Hello {str}
            </div>
        )
    }
}
