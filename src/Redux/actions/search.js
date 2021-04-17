import axios from 'axios'

export function inputValue(data) {
    return {
        type: 'INPUT_VALUE',
        payload: data
    }
}
export function clearField (data){
    return{
        type: 'CLEAR_FIELD',
    }
}

export function filtered (data){
    return{
        type: 'FILTERED',
        payload: data
    }
}

export function searchName(name) {
    return (dispatch) => {
        axios(`https://thdev.atiehhospital.ir/odata/PhysicianDto?$filter=contains(tolower(UserFullName),%27${name}%27)`)
            .then(response => {
                dispatch(filtered(response.data.value))
                dispatch(inputValue(name))
            })
            .catch(err => alert(err))
    }
}