import React, { Component } from 'react'
import PageB from './PageB'

export default class PageA extends Component {
    render() {
        return (
            <div>
                PageA
                <PageB />
            </div>
        )
    }
}
