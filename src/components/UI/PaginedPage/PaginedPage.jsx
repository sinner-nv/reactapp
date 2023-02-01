import React from 'react'
import cl from './PaginedPage.module.css';

function PaginedPage({ totalPages, changePages, p }) {

    return (
        <div className={cl.page__main}>
            {
                totalPages.map(page => <span
                    className={page !== p ? cl.page__pag : [cl.page__pag, cl.page__click].join(' ')}
                    key={page}
                    onClick={() => changePages(page)}
                >
                    {page}

                </span>)
            }
        </div>
    )
}

export default PaginedPage