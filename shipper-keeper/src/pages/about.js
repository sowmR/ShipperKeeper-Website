import * as React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
    <main>
        <title>About ShipperKeeper</title>
        <head>
            <ul>
                <li><Link to="index.html">Home</Link></li>
                <li style="float:right"><Link to="about.html">About</Link></li>
            </ul>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>About Us</h1>
                </div>
            </div>
        </body>
        <footer>
            <p>ShipperKeeper</p>
        </footer>
    </main>
}

export default AboutPage;