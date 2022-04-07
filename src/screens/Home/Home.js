// Module Imports
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// Local Imports
import { BtnLarge, BtnSmallD } from "../../Components/Buttons/Buttons";
import Logo from "../../Components/CompanyLogo/Logo";
import { TopPost, TrendingPost } from "./Post/Post";
import ChevronUpIcon from "../../assets/Images/chevronUp.png";
import "./Home.style.css";
import BaseApi from "../../utility/BaseApi";
import { addPost, removeUser } from "../../store/action";

function Home() {

	const [ShowCount, setShowCount] = useState(4);
	const { User, Posts } = useSelector((state) => state);

	const name = JSON.parse(User).email.split("@")[0];

	const dispatch = useDispatch();
	const navigate = useNavigate();

	// function to get post from the backend
	async function getPost() {
		axios
			.get(`${BaseApi}/products`)
			.then((res) => {
				// console.log(res.data);
				// dispatch(addPost(res.data));

				// console.log(res.data.data);
				// setPosts(res.data.data);
				dispatch(addPost(res.data.data));
			})
			.catch((err) => {
				console.log(err);
			});
	}

	//function to handle the load more tranding post

	function HandleShoreMOre() {
		if (ShowCount < Posts.length) {
			setShowCount(ShowCount + 2);
		}
	}

	function HandleLogout() {
		dispatch(removeUser());
		navigate("/");
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
						{Posts
							? Posts.slice(0, 6).map((ite, ind) => {
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
						{Posts
							? Posts.slice(0, ShowCount).map((ite, ind) => {
									return <TrendingPost {...ite} key={ind} />;
							  })
							: null}
					</div>
				</div>
				<div className='btn__more'>
					{ShowCount != Posts.length ? (
						<BtnLarge btnText='Load More' click={HandleShoreMOre} />
					) : null}
				</div>
			</section>
		</div>
	);
}

export default Home;
