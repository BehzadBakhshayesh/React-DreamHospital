import axios from 'axios'
import { loading } from './loading'

export function search(data) {
    return {
        type: 'SEARCH',
        payload: data
    }
}

export function clearSearch() {
    return {
        type: 'CLEAR_SEARCH',
    }
}

export function getSearch(name) {
    return (dispatch) => {
        dispatch(loading(true))
        axios(`https://thdev.atiehhospital.ir/odata/PhysicianDto?$filter=contains(tolower(UserFullName),%27${name}%27)`)
        .then(response => { dispatch(search(response.data.value)) })
        .catch(err => alert(err))
        .finally(() => dispatch(loading(false)))
    }
}