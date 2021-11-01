import * as React from "react";
import Navbar  from '../components/navbar';
import Container from '../components/container';
import Footer from "../components/footer";
import {JoinContainer} from '../components/container';
import icon from '../images/icon.png';

const IndexPage = () => {
  return (
    <main>
        <Navbar pageTitle="ShipperKeeper"></Navbar>
        <body>
            <Container bannerTitle="Shipper Keeper" bannerSubtitle="The future of Online Shipping" bannerImage = {icon}></Container>
            <Container bannerTitle="Our Solution" bannerSubtitle="An API to send shipments to local stores"></Container>
            <Container bannerTitle="Our Purpose" bannerSubtitle="To grow both online and brick-and-mortar stores"></Container>
            <JoinContainer bannerTitle="Shipper" bannerSubtitle="Become a"></JoinContainer>
            <JoinContainer bannerTitle="Keeper" bannerSubtitle="Become a"></JoinContainer>
        </body>
        <Footer></Footer>
    </main>
  )
}

export default IndexPage
