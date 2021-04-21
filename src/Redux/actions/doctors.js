import axios from 'axios'
import {loading} from './loading'

export function doctors (data){
    return{
        type: 'DOCTORS',
        payload: data
    }
}

export function getDoctors(){
    return (dispatch)=>{
        dispatch(loading (true))
        axios('https://thdev.atiehhospital.ir/odata/PhysicianDto')
        .then(response => dispatch(doctors(response.data.value)))
        .catch(err => alert(err))
        .finally(()=>dispatch(loading (false)))
    } 
}
