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
            <a>GitHub</a>
            <a>LinkedIn</a>
            <a>Medium</a>
        </div>
    )
}

