import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ProptypeDemo extends Component {
    static propTypes = {
        name: PropTypes.string,
        id: PropTypes.number
    }

    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        )
    }
}

export default ProptypeDemo
