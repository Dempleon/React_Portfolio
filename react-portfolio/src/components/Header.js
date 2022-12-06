import React, { useState } from 'react';
import Navigation from './Navigation';
import '../styles/styles.css';

export default function Header({ page, changePage }) {

    // const styles = {
    //     header: {
    //         background: 'black',
    //         color: 'white',
    //         display: 'flex'
    //     },
    //     nameStyle: {
    //         padding: 10,
    //         color: 'white',
    //         float: 'right'
    //     },
    //     nav: {
    //         display: 'flex',
    //         right: 0,
    //     }
    // }

    return (
        <header className='header'>
            <h1 className='name'>Daryl Empleo</h1>
            <nav className="navbar">
                <a
                    href='#About'
                    onClick={() => changePage('About')}
                    className={page === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About me
                </a>
                <a
                    href='#Portfolio'
                    onClick={() => changePage('Portfolio')}
                    className={page === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
                <a
                    href='#Contact'
                    onClick={() => changePage('Contact')}
                    className={page === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
                <a
                    href='#Resume'
                    onClick={() => changePage('Resume')}
                    className={page === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </nav>
        </header>
    )
}
