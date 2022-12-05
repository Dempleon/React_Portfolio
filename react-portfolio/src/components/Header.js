import React, { useState } from 'react';
import Navigation from './Navigation';

function Header() {

    const styles = {
        header: {
            background: 'black',
        },
        nameStyle: {
            padding: 10,
            color: 'white'
        }
    }

    return (
        <header style={styles.header}>
            <h1 className='name' style={styles.nameStyle}>Daryl Empleo</h1>
            <nav style={styles.nav}>
                <a>
                    About me
                </a>
                <a>
                    Portfolio
                </a>
                <a>
                    Contact
                </a>
                <a>
                    Resume
                </a>
            </nav>
            <Navigation />
        </header>
    )
}

export default Header;