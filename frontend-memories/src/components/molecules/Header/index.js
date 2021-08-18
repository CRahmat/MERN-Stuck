import React from 'react'
import './header.scss'
import { useHistory } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const history = useHistory();
    return (
        <header className="header">
            <a href="#" className="logo"><span>Memories</span>App</a>
            <input type="checkbox" id="menu-bar"/>
            <label for="menu-bar"><FontAwesomeIcon icon={faBars} /></label>
            <nav className="navbar">
                <a href="" onClick={() => history.push('./')}>Home</a>
                <a href="">Content</a>
                <a href="">About</a>
                <a href="" onClick={() => history.push('./login')}>Login</a>
            </nav>
        </header>
    )
}

export default Header
