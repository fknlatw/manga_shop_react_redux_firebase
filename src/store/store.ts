import { configureStore } from "@reduxjs/toolkit";

interface UserState {
    user: null | object
}

const initialState: UserState = {
    user: null
}

const userReducer = (state = initialState, action: any) => {
    switch(action.type){
        case "LOGIN":
            return {
                user: action.payload
            };
        case "LOGOUT":
            return {
                user: null
            }
        default:
            return state;
    }
}

export const store = configureStore({
    reducer: {
        user: userReducer
    }
});