import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spin, Space } from 'antd'
import Group from '../../Components/Group/Group'
import { getDoctors } from '../../Redux/actions/doctors'
import { clearInput } from '../../Redux/actions/inputValue'
import { clearSearch } from '../../Redux/actions/search'
import flatten from '../../Tools/flatten'
import './Home.scss'



const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDoctors())
        dispatch(clearSearch())
        dispatch(clearInput())
    }, [])

    const doctors = useSelector(state => state.doctors)
    const search = useSelector(state => state.search)
    const inputValue = useSelector(state => state.inputValue)
    const loading = useSelector(state => state.loading)
    const result = (search.length === 0 && inputValue.trim() === '') ? doctors : search
    const a = []
    const b = flatten(result.map(element => [...a, element.BeneficiaryGroupName]))
    const GroupName = [...new Set(b)]

    return (
        <>
            {loading ?
                <div className='loading'>
                    <Space size="middle">
                        <Spin size="large" tip="Loading..." />
                    </Space>
                </div> :
                <div className='Home'>
                    {
                        GroupName.map(el => <Group key={Math.random()} GroupName={el} result={result} />)
                    }
                </div>}
        </>
    )
}

export default Home
