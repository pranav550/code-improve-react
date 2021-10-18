import React, { Component } from 'react'
import PageC from './PageC'
import Context from './Context'

export default class PageB extends Component {
    static contextType = Context
    render() {
        console.log('page B', this.context)
        return (
            <div>
                PageB
                <p>vkjjviuvniuv{this.context.name}</p>
                <PageC />
            </div>
        )
    }
}
