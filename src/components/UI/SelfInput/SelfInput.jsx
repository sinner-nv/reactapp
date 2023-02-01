import React from 'react'
import cl from './SelfInput.module.css'

function SelfInput(props) {
    return (
        <React.Fragment>
            <input
                className={cl.inp}
                {...props}
            />
        </React.Fragment>
    )
}

export default SelfInput