const arrayReucer = (state=[], action) => {
    switch(action.type) {
        case "EDIT_STREAM":
            return state.map( a => {
                if(a.id === action.payload.id) {
                    return action.payload
                } else {
                    return stream
                }
            })

        default: 
            return state
    }

}

// object baesed approach
const streamReducer = (state={}, action) => {
    switch(action.type) {
        case "EDIT_STREAM":
            // const newState = { ...state}
            // newState[action.payload.id] = action.payload
            // return newState
            // Alternate approach

            return { ...state, [action.payload.id]: action.payload }
        default:
            return state
    }
}