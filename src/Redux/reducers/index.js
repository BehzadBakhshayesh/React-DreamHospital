import {combineReducers} from 'redux'
import {doctors, loading} from './doctors'
import {inputValue} from './inputValue'

export default combineReducers({
    doctors,
    loading,
    inputValue,
})
