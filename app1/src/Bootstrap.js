import React, { Component } from 'react'
import { Button, Alert } from 'react-bootstrap';
export default class Bootstrap extends Component {
    render() {
        return (
            <div>
                <Button variant="danger">Danger</Button>
                <Alert variant="danger">Hello</Alert>
            </div>
        )
    }
}
