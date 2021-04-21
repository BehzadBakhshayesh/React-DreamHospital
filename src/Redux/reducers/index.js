import {combineReducers} from 'redux'
import {doctors} from './doctors'
import {loading} from './loading'
import {search} from './search'
import {inputValue} from './inputValue'

export default combineReducers({
    doctors,
    loading,
    search,
    inputValue, 
})
