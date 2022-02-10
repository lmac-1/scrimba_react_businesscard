import React from 'react';
import Image from './components/Image';
import PersonalDetails from './components/PersonalDetails';
import Footer from './components/Footer';

export default function App() {
    return (
        <article className="card">
            <Image />
            <PersonalDetails />
            <Footer />
        </article>
    )
}