import React from 'react'
import { Link, useMatch } from 'react-router-dom'

function CustomLink({ children, to, ...props }) {
    const math = useMatch(to)
    console.log(math);
    return (
        <Link
            to={to}
            style={{
                color: math ? ' brown' : ''
            }}
            {...props}>
            {children}
        </Link>
    )
}

export default CustomLink