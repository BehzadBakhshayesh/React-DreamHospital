import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SearchOutlined } from '@ant-design/icons'
import { searchName } from '../../Redux/actions/search'
import { Input } from 'antd';
import './Search.scss'

const Search = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    const changeHandle = (e) => {
        setInput(e.target.value);
        dispatch(searchName(e.target.value))
    }
    return (
        <>
            <div className='Search'>
                <Input placeholder="...جستجو" onChange={(e) => changeHandle(e)} value={input} />
            </div>
        </>
    )
}

export default Search
