export function doctors (state={
    full: [],
    filtered: [],
}, action){
    switch (action.type){
        case 'DOCTORS' : return {...state, full: action.payload}
        case 'FILTERED' : return {...state, filtered: action.payload}
        case 'CLEAR_FILTERED' : return {...state, filtered: []}
        default : return state
    }
}

export function loading (state=true, action){
    switch (action.type){
        case 'LOADING' : return action.payload
        default : return state
    }
}