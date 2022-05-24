const modalReducer = (state = true, action) => {
    switch(action.type) {
        case "SET_MODAL":
            return action.payload;
        default:
            return state;
    }
}

const timerReducer = (state = false, action) => {
    switch(action.type) {
        case "SET_TIMER":
            return action.payload;
        default:
            return state;
    }
}

export {modalReducer, timerReducer}