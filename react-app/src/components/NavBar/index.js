import React from 'react';
import { NavLink } from 'react-router-dom';
// import LogoutButton from '../auth/LogoutButton'
import './NavBar.css'
import SearchBar from './SearchBar';


export default function NavBar() {
    return (
        <nav className='nav-items'>
            <div>
                <NavLink to='/' exact={true} activeClassName='active' className='navlink'>
                    <div className='nav-logo'>
                        <i class="fa-brands fa-youtube">
                        </i>
                        <div>
                            YuhTube
                        </div>
                    </div>
                </NavLink>
            </div>
            <SearchBar />
        </nav>
    )
}
