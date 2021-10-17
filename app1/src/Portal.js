import React from 'react'
import ReactDOM from 'react-dom';

export default function Portal() {
    return ReactDOM.createPortal(
        <div>
            <h2>Portal Data</h2>
        </div>,
        document.getElementById('root-portal')
    )
}
