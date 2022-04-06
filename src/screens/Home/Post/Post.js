import React from "react";

import "./Post.style.css";

import CardImage from "../../../assets/Images/CardImage.png";

export function TrendingPost({description,id,metaImageUrl}) {
	return (
		<div className='TrendingPost__container'  key={id}>
			<img src={metaImageUrl} alt='' className="post__Image"/>

			<div className='text__overlay'>
				<div className='text__wrapper'>
                <p>{description.substring(0, 50)}...</p>
				</div>
			</div>
		</div>
	);
}


export function TopPost({description,id,metaImageUrl}) {
	return (
		<div className='TopPost__container'  key={id}>
			<img src={metaImageUrl} alt='' className="post__Image"/>

			<div className='text__overlay'>
				<div className='text__wrapper'>
					<p>{description.substring(0, 50)}...</p>
				</div>
			</div>
		</div>
	);
}