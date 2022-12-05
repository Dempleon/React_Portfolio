import React, { useState } from 'react';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import Project from './Project';
import Contact from './Contact';
import Resume from './Resume';
import '../styles/Navigation.css'

export default function Navigation() {
    const [page, setPage] = useState('About')

    function renderPage() {
        if (page === 'About') {
            return <About />
        }
        if (page === 'Portfolio') {
            return <Project />
        }
        if (page === 'Contact') {
            return <Contact />
        }
        if (page === 'Resume') {
            return <Resume />
        }
    }

    function changePage(page) {
        setPage(page)
    }

    return (
        <nav>
            <Header currentPage={page} changePage={changePage} />
            {renderPage()}
        </nav>
    )
}
