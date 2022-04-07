import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from "axios";
import {useDispatch} from 'react-redux'

import "./Login.style.css";
import SideImage from "../../assets/Images/sideImage.svg";
import BaseApi from "../../utility/BaseApi";


import { addUser } from "../../store/action";

function Login() {


	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch()

	const [LoginDetails, setLoginDetails] = useState({
		email: "",
		password: "",
	});

	const [IsEmpty, setIsEmpty] = useState(false);

	const from = location.state?.from?.pathname || "/";


	


	//function to update input state
	function handleInput(e) {
		const { name, value } = e.target;
		setLoginDetails({ ...LoginDetails, [name]: value });
	}


	//function to submit form
	function handleSubmit(e) {
		e.preventDefault();

		if (((LoginDetails.email === "") || (LoginDetails.password === "")  || (!LoginDetails.password.length>=8))) {
			setIsEmpty(true);
			console.log('here')
			return;
		}




			setIsEmpty(false)
			axios.post(`${BaseApi}/auth/login`,LoginDetails)
			.then((res)=>{

				localStorage.setItem('user', JSON.stringify(res.config.data))
				dispatch(addUser(res.config.data))
				navigate(from,{replace:true})
			}
			).catch(
				(error)=>{ console.log(error.message)}
			)
		
	}

	return (
		<>
			<div className='Login__container'>
				<div className='login__side'>
					<img src={SideImage} alt='' />
				</div>

				<div className='login_content'>
					<div className='login_box'>
						<h3>Login</h3>

						{IsEmpty && <p  style={{color:'#ea7052'}}>*Filed can not be empty and password &gt; 8 char</p>}
						<form
							action=''
							className='login__form'
							onSubmit={(e) => handleSubmit(e)}
						>
							<input
								type='text'
								name='email'
								placeholder='Email'
								className='email__input'
								value={LoginDetails.email}
								onChange={(e) => handleInput(e)}
							/>
							<input
								name='password'
								type='password'
								value={LoginDetails.password}
								onChange={(e) => handleInput(e)}
								placeholder='Password'
								className='password__input'
							/>

							<button className='loginForm__btn' type='submit'>
								Login
							</button>
						</form>

						<div className='cta'>
							<p>
								Dont have an account register ? <Link to='/register'>here</Link>{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
