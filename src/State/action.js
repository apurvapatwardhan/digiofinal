const showModal = (payload) => {
    return {
        type:"SET_MODAL",
        payload
    }
}

const timerAction = (payload) => {
    return {
        type: "SET_TIMER",
        payload
    }
}

export {showModal, timerAction}