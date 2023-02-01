import React from 'react'
// import cl from './Layout.module.css';
import '../../style/style.css';

import { Outlet, NavLink } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

function Layout() {

    return (
        <>
            <header className='headerFlex'>
                <CustomLink to="/"><h1>Home</h1></CustomLink>
                <CustomLink to='/posts'><h1>Posts</h1></CustomLink>
                <CustomLink to="/about"><h1>About</h1></CustomLink>
            </header>
            <Outlet />
            <footer>2023</footer>
        </>
    )
}

export { Layout }