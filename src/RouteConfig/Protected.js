import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Auth() {
	const User = useSelector((state) => state.User);


	const isAuth = User? true:false;
	const location = useLocation();

	return isAuth? <Outlet /> : <Navigate to='/login' state={{from:location}} replace/>;
}


export default Auth;
