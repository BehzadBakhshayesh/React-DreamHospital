import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../Components/Avatar/Avatar'
import './Group.scss'

const Group = ({ GroupName, result }) => {
    return (
        <>
            <div className='GroupName'>
                <h2>{GroupName} :</h2>
                <div className='row'>
                    <div className='innerrow'>
                        {
                            result.filter(el => {
                                return el.BeneficiaryGroupName === GroupName
                            }).map(dr => <Link to={`/profile/${dr.Id}`} key={dr.Id}><Avatar picUrl={dr.ProfilePicture} drName={dr.UserFullName} /></Link>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Group
