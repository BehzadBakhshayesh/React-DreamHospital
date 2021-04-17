import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link, Redirect } from 'react-router-dom'
import { Button } from 'antd';
import './Profile.scss'

const Profile = () => {
    const { id } = useParams()
    const doctors = useSelector(state => state.doctors.full)

    return (
        <>
            <div className='Profile'>
                {doctors.filter(el => {
                    return el.Id === id
                }).map(dr => <div key={dr.Id} className='innerProfile'>
                    <div className='infoContainer'>
                        <ul>
                            <li> <span>نام :</span> {dr.UserFullName} </li>
                            <li> <span>گروه :</span> {dr.BeneficiaryGroupName} </li>
                            <li> <span>تحصیلات :</span> {dr.HighestExpertLevel} </li>
                            <li> <span>جنسیت :</span> {dr.GenderType === 'male' ? ('زن') : ('مرد')}</li>
                            <li>
                                <Button type="primary">
                                    <Link to='/' style={{ color: '#fff' }}>
                                        بازگشت به لیست پزشکان 
                                    </Link>
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className='imageContainer'>
                        <img src={dr.ProfilePicture} alt='' />
                    </div>
                </div>)}

            </div>
            {doctors.length === 0 && <Redirect to='/' />}
        </>
    )
}

export default Profile
