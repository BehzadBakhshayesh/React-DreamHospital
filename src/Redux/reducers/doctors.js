export function doctors (state=[], action){
    switch (action.type){
        case 'DOCTORS' : return action.payload
        default : return state
    }
}

