import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Spin, Space } from 'antd'
import { getDoctors, clearFiltered } from '../../Redux/actions/doctors'
import { clearField } from '../../Redux/actions/search'
import Avatar from '../../Components/Avatar/Avatar'
import './Home.scss'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => { 
        dispatch(getDoctors()) 
        dispatch(clearFiltered()) 
        dispatch(clearField()) 
    }, [])

    const doctors = useSelector(state => state.doctors.full)
    const filtered = useSelector(state => state.doctors.filtered)
    const inputValue = useSelector(state => state.inputValue)
    const loading = useSelector(state => state.loading)
   
    const result = (filtered.length ===0 && inputValue.trim() === '') ? doctors : filtered
   
    return (
        <>
            {loading ?
                <div className='loading'>
                    <Space size="middle">
                        <Spin size="large" tip="Loading..." />
                    </Space>
                </div> :
                <div className='Home'>
                    <h2>پزشک عمومی :</h2>
                    <div className='row'>
                        <div className='innerrow'>
                            {
                                result.filter(el => {
                                    return el.BeneficiaryGroupName === 'پزشک عمومی'
                                }).map(dr => <Link to={`/profile/${dr.Id}`} key={dr.Id}><Avatar picUrl={dr.ProfilePicture} drName={dr.UserFullName} /></Link>)
                            }
                        </div> 
                    </div>
                    <h2>پزشک متخصص :</h2>
                    <div className='row'>
                        <div className='innerrow'>
                            {
                                result.filter(el => {
                                    return el.BeneficiaryGroupName === 'پزشک فوق متخصص'
                                }).map(dr => <Link to={`/profile/${dr.Id}`} key={dr.Id}><Avatar picUrl={dr.ProfilePicture} drName={dr.UserFullName} /></Link>)
                            }
                        </div>
                    </div>

                </div>}
        </>
    )
}

export default Home
