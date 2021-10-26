import * as React from 'react';
import { Link } from 'gatsby';
import "./navbar.module.css";
import {aboutButton} from "./navbar.module.css";

const Navbar = (props) => {
    const pageTitle = props.pageTitle;
    return (
        <div>
            <title>{pageTitle}</title>
            <header>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className={aboutButton}><Link to="/about">About</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Navbar