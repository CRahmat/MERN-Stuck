import React from 'react'
import { Logo } from '../../../assets'
import './header.scss'
import { useHistory } from 'react-router'

const Header = () => {
    const history = useHistory();
    return (
        <div className="header">
            <img className="brand-logo" src={Logo} alt="Mern Logo"/>
            <div className="fitur">
                <ul>
                    <li onClick={() => history.push('./')}>Home</li>
                    <li onClick={() => history.push('./login')}>Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
