import React from 'react'
import cl from './SelfAreatext.module.css'

function SelfAreatext(props) {
    return (
        <React.Fragment>
            <textarea
                maxLength={256}
                className={cl.areatext}
                {...props}
            />
        </React.Fragment>
    )
}

export default SelfAreatext