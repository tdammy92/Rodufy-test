import React,{useState} from "react";
import { Link ,useNavigate} from "react-router-dom";

// internal imports of components
import Announce from "../../Components/Annoucement/Announce";
import Logo from "../../Components/CompanyLogo/Logo";
import Footer from "../../Components/Footer/Footer";
import {
	BtnLarge,
	BtnSmallD,
	BtnSmallL,
} from "../../Components/Buttons/Buttons";


import androidImage from "../../assets/Images/android.png";
import appleImage from "../../assets/Images/apple.png";
import Image1 from "../../assets/Images/sharath-kumar-hari-Mb2LErousEY-unsplash 1.png";
import Image2 from "../../assets/Images/rasheed-kemy-oqY09oVTa3k-unsplash 1.png";
import Image3 from "../../assets/Images/conatctImage.png";
import mailIcon from "../../assets/Images/mailIcon.png";
import whatsAppIcon from "../../assets/Images/whatAppIcon.png";

import "./Landing.style.css";

import {useSelector,useDispatch} from 'react-redux'

function Landing() {

	const [ShowBanner, setShowBanner] = useState(true)

	const navigate = useNavigate()
	const User = useSelector((state)=>state.User);

	const isAuth = User? true:false;
	
	return (
		<div>

	{
		ShowBanner &&
			<Announce ShowBanner={ShowBanner} setShowBanner={setShowBanner}/>
}
		


			<div className='Index_Conatiner'>
				<section className='top_wrapper'>
					<div className='bna'>
						<div className='logo_container'>
							<Logo />
						</div>




						<div className='loginRegister_btns'>


						{
							isAuth? <BtnSmallD btnText='View Post' click={() =>  navigate('/Home')} /> 
							:
							<>							
							<BtnSmallD btnText='Register' click={() =>  navigate('/register')} />
							<BtnSmallL btnText='Login' click={() => navigate('/login')} />
							</>
						}
						</div>
					</div>

					<div className='top'>
						<div className='top_leftPart'>

            <div className="top_leftPart_container">

							<div className='mission_container'>
								<h3>
									Our mission is to{" "}
									<span style={{ color: "#EA7052" }}>advance</span> humanity
								</h3>

								<p>
									We would strive to achieve that through providing education
									and quality health
								</p>
							</div>

							<div className='download_btns'>
								<h1>DOWNLOAD APP</h1>
								<Link to='/'>
									<img src={androidImage} alt='android' />
								</Link>
								<Link to='/'>
									<img src={appleImage} alt='apple' />
								</Link>
							</div>
            </div>
						</div>
						<div className='top_rightPart'>
							<div className='bannerImage'>
								<img src={Image1} alt='Banner1' />
							</div>
						</div>
					</div>
				</section>

				<section className='gettingStarted_container'>
					<div className='gettingStarted_left'>
						<div className='gettingStarted_leftContainer'>
							<h4>
								Everything you’ll need to{" "}
								<span style={{ color: "#EA7052" }}>excel</span> in life
							</h4>

							<p>
								We’ve curated a list of valuable resources to get you going in
								life, all for free!
							</p>

							<BtnLarge btnText={"Get Started "} click={() => {}} />
						</div>
					</div>
					<div className='gettingStarted_right'>
						<div className='bannerImage2'>
							<img src={Image2} alt='Banner2' />
						</div>
					</div>
				</section>

				<section className='contact_conatiner'>
					<div className='contact_left'>
						<div className='contact_leftContent'>
							<h4>Contact Us</h4>
							<p>
								Got any questions, feedback, request and complains? Reach out...
							</p>

							<div className='contact_address'>
								<div className='contact_addressItems'>
									<img src={whatsAppIcon} alt=''  />
									<p>+2348232323892</p>
								</div>
								<div className='contact_addressItems'>
									<img src={mailIcon} alt=''  />
									<p>contact@us.com</p>
								</div>
							</div>
						</div>
					</div>
					<div className='contact_right'>
						<div className='bannerImage3'>
							<img src={Image3} alt='Banner2' />
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
}

export default Landing;
