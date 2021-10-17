import React from 'react'

const RefFn = React.forwardRef((props, ref) => {
    return (
        <div>
            ForWardRef
            <input type="text" ref={ref} placeholder="test" />
        </div >
    )
})

export default RefFn
