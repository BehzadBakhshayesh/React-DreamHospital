export function search (state=[], action){
    switch (action.type){
        case 'SEARCH' : return action.payload
        case 'CLEAR_SEARCH' : return []
        default : return state
    }
}