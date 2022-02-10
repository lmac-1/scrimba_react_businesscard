import React from 'react';
import About from './About';
import Info from './Info';
import Interests from './Interests'

export default function PersonalDetails() {
    return (
        <div className="content-container">
            <Info />
            <About />
            <Interests />
        </div>
    )
}
