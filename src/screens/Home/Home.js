// Module Imports
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link ,useNavigate} from "react-router-dom";

// Local Imports
import { BtnLarge, BtnSmallD } from "../../Components/Buttons/Buttons";
import Logo from "../../Components/CompanyLogo/Logo";
import { TopPost, TrendingPost } from "./Post/Post";
import ChevronUpIcon from "../../assets/Images/chevronUp.png";
import "./Home.style.css";
import BaseApi from "../../utility/BaseApi";
import { addPost,removeUser } from "../../store/action";







function Home() {




	const {User ,Posts} = useSelector((state) => state);
	const name = User?.email?.split("@")[0]



	
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// function to get post from the backend
	async function getPost() {
		axios
			.get(`${BaseApi}/products`)
			.then((res) => {
				// console.log(res.data);
				// dispatch(addPost(res.data))

				// 		console.log(res.data.data);
				// setPosts(res.data.data);
				dispatch(addPost(res.data.data));
			})
			.catch((err) => {
				console.log(err);
			});
	}


	function HandleLogout() {

		console.log("i was cliked");
		dispatch(removeUser());
		navigate('/')
		
	}

	useEffect(() => {
		// calling the get post function in a useeffect without dependency so it called only when d page just loads
		getPost();
	}, []);

	
	

	return (
		<div className='home__container'>
			{/* header section starts here */}
			<section className='header__section'>
				<div className='header__wrapper'>
					<Logo />

					<div className='header__right'>
					 <h2>Hi {name}</h2>

						<BtnSmallD btnText='Logout' click={HandleLogout} />
					</div>
				</div>
			</section>

			{/* top post section starts here */}
			<section className='topPost__section'>
				<div className='topPost__wrapper'>
					<div className='toppost__header'>
						<img src={ChevronUpIcon} alt='' />
						<h4>Top Post</h4>
					</div>
					 
						<div className='top__sectionList'>
							{Posts.length > 0
								? Posts?.map((ite, ind) => {
										return <TopPost {...ite} key={ind} />;
								  })
								: null}
						</div>
					
				</div>
			</section>

			{/* trending section starts here */}
			<section className='trending__section'>
				<div className='trending__wrapper'>
					<div className='trending__header'>
						<img src={ChevronUpIcon} alt='' />
						<h4>Trending</h4>
					</div>
					
						<div className='trending__List'>
						{Posts.length > 0
							? Posts?.map((ite, ind) => {
									return <TrendingPost {...ite} key={ind} />;
							  })
							: null}
					</div>
				</div>
				<div className='btn__more'>
					<BtnLarge btnText='Load More' />
				</div>
			</section>
		</div>
	);
}

export default Home;
