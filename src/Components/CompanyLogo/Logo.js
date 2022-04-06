import React from "react";
import { Link } from "react-router-dom";
import "./Logo.style.css"
import LogoImage from '../../assets/Images/Logo.png'

function Logo() {
	return (
		<Link  className="companyLogo_conatiner"  to="/">
			<img src={LogoImage} alt='Company Icon' className='companyLogo' />
			<h4 className='companyLogo_text'>Rodufy</h4>
		</Link>
	);
}

export default Logo;
