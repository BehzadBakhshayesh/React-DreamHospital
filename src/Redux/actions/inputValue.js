export function inputValue(data) {
    return {
        type: 'INPUT_VALUE',
        payload: data
    }
}
export function clearInput (){
    return{
        type: 'CLEAR_INPUT',
    }
}