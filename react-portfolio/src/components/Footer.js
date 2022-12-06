import React, {useState} from 'react';
import '../styles/styles.css'

const styles = {
    footerSticky: {
        display: 'flex',
        // position: 'absolute',
        bottom: 0,
        width: '100%',
        background: 'blue',
    },
    textcolor: {
        color: 'red',
    }
}

export default function Footer() {

    return (
        <div className='stickyFooter'>
            <a href='https://github.com/Dempleon'>GitHub</a>
            <a href='https://www.linkedin.com/in/daryl-empleo/'>LinkedIn</a>
            <a href='https://medium.com/@dempoleon'>Medium</a>
        </div>
    )
}

