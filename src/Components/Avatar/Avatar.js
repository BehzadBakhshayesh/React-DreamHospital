import React from 'react'
import './Avatar.scss'

const Avatar = ({picUrl, drName }) => {

    return (
        <>
            <div className='Avatar'>
                <div className='pic'>
                    <img src={picUrl} alt='' />
                </div>
                <div className='name'>
                    {drName}
                </div>
            </div>
        </>
    )
}

export default Avatar
