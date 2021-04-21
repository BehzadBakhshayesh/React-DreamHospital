import React from 'react'
import { useLocation } from 'react-router-dom'
import Search from '../Search/Search'
import logo from '../../Assets/images/logo.png'
import './Header.scss'

const Header = () => {
    
     const {pathname} = useLocation()

    return (
        <>
            <header className='Header'>
                <div>
                    {pathname ==='/' && <Search />}
                </div>
                <div className='logoContainer'>
                    <h1>Dream Hospital </h1>
                    <img src={logo} alt=''/>
                </div>
            </header>
        </>
    )
}

export default Header
