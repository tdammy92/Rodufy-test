import React from "react";

import { Link } from "react-router-dom";
import Logo from "../CompanyLogo/Logo";
import './Footer.style.css'

function Footer() {
	return (
		<div className='Footer_container'>
			<div  className="Footer_item_top">
				<Logo/>
			</div>
			<div  className="Footer_item_Link">
            <Link to="/">Blog</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            </div>
			<div  className="Footer_item_copyright">
                <p>copyright Rodufy {new Date().getFullYear()}</p>
            </div>
		</div>
	);
}

export default Footer;
