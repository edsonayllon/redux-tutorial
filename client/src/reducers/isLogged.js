
const devState = false;

const loggedReducer = (state = devState, action) => {
    switch(action.type) {
        case 'SIGN_IN': 
            return false;
        default:
            return state;
    }
}

export default loggedReducer;