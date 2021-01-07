export const initialState = {
    userLogged: {
        name: '',
        id: '',
        email: '',
    },
}

export function reducer(state = initialState, action) {
    if(action.type === "USER_LOGGED") {
        return {
            ...state,
            userLogged: action.userLogged
        }
    }
    
    return state;
}

export function useUserLoggedDispatch(dispatch) {
    return {
        setUserLogged: (userLogged) => dispatch({ type: "USER_LOGGED", userLogged }),
    }
}