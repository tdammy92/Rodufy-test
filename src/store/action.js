import { actionTypes } from "./constant"


//action to adduser
export function addUser(user) {

    return {
        type:actionTypes.ADD_USER,
        payload:user
    }

    
}

//action to add post from d result returned from the product api
export function addPost(post) {
    return {
        type:actionTypes.ADD_POST,
        payload:post
    }

}


//action to remove user from the app and logout
export function removeUser() {
    return {
        type:actionTypes.REMOVE_USER
    }
}