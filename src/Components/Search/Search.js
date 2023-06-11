import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { getSearch } from '../../Redux/actions/search'
import { inputValue } from '../../Redux/actions/inputValue'
import './Search.scss'


const Search = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const changeHandle = (e) => {
        setInput(e.target.value)
    }
    const submitHandle = (e) => {
        e.preventDefault()
        dispatch(getSearch(input))
        dispatch(inputValue(input))
    }

    return (
        <>
            <div className='Search'>
                <form className='form' onSubmit={(e) => submitHandle(e)}>
                    <Input placeholder='جستجو...' onChange={(e) => changeHandle(e)} value={input} />
                    <Button htmlType='submit' icon={<SearchOutlined />} />
                </form>
            </div>
        </>
    )
}

export default Search
