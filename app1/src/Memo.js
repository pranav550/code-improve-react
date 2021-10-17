import React from 'react'

function Memo(props) {
    console.log("memo called")
    return (
        <div>
            Memo component
            <p>{props.name}</p>
        </div>
    )
}

export default React.memo(Memo)
