import React from 'react'
import cl from './SelfModal.module.css';

function SelfModal({children, visible, setVisible}) {

    const styleForModal = [cl.myModal]
    if (visible) {
        styleForModal.push(cl.active)
    }

    return (
        <div className={styleForModal.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e => e.stopPropagation())}>
                {children}
            </div>
        </div>
    )
}

export default SelfModal