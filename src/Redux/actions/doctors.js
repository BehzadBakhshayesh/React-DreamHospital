import axios from 'axios'

export function doctors (data){
    return{
        type: 'DOCTORS',
        payload: data
    }
}


export function loading (data){
    return{
        type: 'LOADING',
        payload: data
    }
}
export function clearFiltered (){
    return{
        type: 'CLEAR_FILTERED',
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
