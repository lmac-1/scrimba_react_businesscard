import React from 'react';

export default function Info() {
    return (
        <section className="info">
            <h1 className="info--name">Lucy Macartney</h1>
            <h2 className="info--jobtitle">Software Developer</h2>
            <a className="info--website" href="https://google.com" target="_blank">lucywebsite.me</a>
            <div className="info--buttonscontainer">
                <a href="https://google.com" target="_blank"><button className="info--button"><i className="fas fa-envelope"></i> Email</button></a>
                <a href="https://linkedin.com/in/lucymacartney" target="_blank"><button className="info--button info--linkedin"><i className="fab fa-linkedin"></i> LinkedIn</button></a>
            </div>
        </section>
        )
}