import { actionTypes } from "./constant";



export function getUser() {

    const ls = JSON.parse(localStorage.getItem('user'));


    return ls? ls : null

   
    

  
}






const InitialStore = {
    User:getUser(),
    Posts: [],
};

function reducer(state = InitialStore, { type, payload }) {
	switch (type) {
		case actionTypes.ADD_USER:
			return { ...state, User: payload };

            
		case actionTypes.REMOVE_USER:
            localStorage.removeItem('user'); 
			return { ...state, User: null };


		case actionTypes.ADD_POST:
          
			return { ...state, Posts:payload };

		default:
			return state;
	}
}

export default reducer;
