import * as React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <main>
        <title>ShipperKeeper</title>
        <head>
            <ul>
                <li><Link to="index.js">Home</Link></li>
                <li style="float:right"><Link to="about.html">About</Link></li>
            </ul>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>ShipperKeeper</h1>
                </div>
                <div class="subtitle">
                    <p>The future of Online Shipping</p>
                </div>
            </div>
            <div class="container">
                <div class="header">
                    <h1>Our Solution</h1>
                </div>
                <div class="subtitle">
                    <p>An API to send shipments to local stores</p>
                </div>
            </div>
            <div class="container">
                <div class="header">
                    <h1>Our Purpose</h1>
                </div>
                <div class="subtitle">
                    <p>To grow both online and brick-and-mortar stores</p>
                </div>
            </div>
        </body>
        <footer>
            <p>ShipperKeeper</p>
        </footer>
    </main>
  )
}

export default IndexPage
