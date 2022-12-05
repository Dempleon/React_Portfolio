import React, {useState} from 'react';
import '../styles/Navigation.css'

function Navigation() {
    const [page, setPage] = useState('About')

    function renderPage(){
        if(page === 'About') {
            return
        }
    }

    return (
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
    )
}

export default Navigation;