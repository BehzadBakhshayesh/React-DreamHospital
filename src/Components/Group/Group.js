import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../Components/Avatar/Avatar'
import { Collapse, Divider } from 'antd'
import './Group.scss'
const { Panel } = Collapse

const Group = ({ GroupName, result }) => {
    return (
        <>
            <div className='GroupName'>
                <Collapse defaultActiveKey={['1']} ghost>
                    <Panel header={GroupName} key={GroupName}>
                        <div className='row'>
                            <div className='innerrow'>
                                {
                                    result.filter(el => {
                                        return el.BeneficiaryGroupName === GroupName
                                    }).map(dr => <Link to={`/profile/${dr.Id}`} key={dr.Id}><Avatar picUrl={dr.ProfilePicture} drName={dr.UserFullName} /></Link>)
                                }
                            </div>
                        </div>
                    </Panel>
                </Collapse>
                <Divider />
            </div>
        </>
    )
}

export default Group
