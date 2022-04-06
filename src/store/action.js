import { actionTypes } from "./constant"



export function addUser(user) {

    return {
        type:actionTypes.ADD_USER,
        payload:user
    }

    
}


export function addPost(post) {
    return {
        type:actionTypes.ADD_POST,
        payload:post
    }

}



export function removeUser() {
    return {
        type:actionTypes.REMOVE_USER
    }
}