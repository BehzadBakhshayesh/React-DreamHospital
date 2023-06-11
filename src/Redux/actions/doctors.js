import axios from 'axios'
import {loading} from './loading'
import { message } from 'antd'

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
        .catch(err =>  message.error(`${err}`))
        .finally(()=>dispatch(loading (false)))
    } 
}
