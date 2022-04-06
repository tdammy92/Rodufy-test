import React from "react";
import CloseIcon from "../../assets/Images/closeIcon.png";
import "./Announce.style.css";

function Announce({setShowBanner,ShowBanner}) {

// const classees = `${ShowBanner? 'annoucement_container': 'hide_annoucement'}`



	return (
		<div 
	
		// className={classees}
		className="annoucement_container"
		>
			<div className='annoucement_items'>
				<button  className="annoucement_btnNew">New !</button>
				
				<p className="annoucement_text">Announcing our $15 million series A funding!</p>
				

				<img src={CloseIcon} alt="close"   className="annoucement_btnClose"  onClick={()=>setShowBanner(!ShowBanner)}/>
			</div>
		</div>
	);
}

export default Announce;
