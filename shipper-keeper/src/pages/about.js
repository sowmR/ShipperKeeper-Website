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
                <p style={{"textAlign":"center"}}>I am a freshman in high school, passionate about the local community’s well-being, and am thinking of ways to keep it vibrant. Another thing I’m passionate about is using technology to solve problems. I used to always enjoy going to Toy Stores and was devastated when it closed. Technological advancement doesn’t have to be a detriment to local businesses. Instead, there should be a way to help them. I strongly feel that there is room for all of us to grow & thrive. The idea I dreamt up is to help local, main street businesses by allowing them to be a pick-up and return location for online businesses. This is a symbiotic relationship: while the online businesses gain a physical presence, the main street businesses get customers. There are benefits for all three parties involved -- e-commerce business, brick & mortar businesses as well as consumers. There are more benefits for the consumers as well, it is safe, convenient as well and helps them to go green by reducing the number of delivery trips. This will be done by allowing consumers to pick up other things that they need when they go to pick up their package. One additional idea is to allow online businesses to have the option for cash transactions. Often online businesses miss out on the possibility of cash transactions which is a large, untapped market. The brick & mortar businesses already have the mechanism to handle point of sale. This will also allow for your business to have an easier option for a physical presence. We have spoken with some local businesses that have shown interest in this idea. The consumers can pick up, pay for it with cash, or drop off their returns to online purchases
</p>
            </body>
            <Footer></Footer>
        </main>
    )
}

export default AboutPage;