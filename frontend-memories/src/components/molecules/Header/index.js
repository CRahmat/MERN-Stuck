import React from 'react'
import { Logo } from '../../../assets'
import './header.scss'

const Header = () => {
    return (
        <div className="header">
            <img className="brand-logo" src={Logo} alt="Mern Logo"/>
            <div className="fitur">
                <ul>
                    <li>Home</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
