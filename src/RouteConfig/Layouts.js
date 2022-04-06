import React from "react";
import { Outlet } from "react-router-dom";

function Layouts() {
	return (
		<div className='App'>
			<Outlet />
		</div>
	);
}

export default Layouts;
