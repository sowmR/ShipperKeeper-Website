import * as React from 'react';
import Navbar from '../components/navbar';
import Container from '../components/container';
import Footer from '../components/footer';

const AboutPage = () => {
    return (
        <main>
            <Navbar pageTitle="About ShipperKeeper"></Navbar>
            <body>
                <Container bannerTitle = "About Us" bannerSubtitle = "The Story of ShipperKeeper"></Container>
            </body>
            <Footer></Footer>
        </main>
    )
}

export default AboutPage;