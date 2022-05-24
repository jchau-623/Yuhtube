import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton'
import './NavBar.css'
import SearchBar from './SearchBar';


export default function NavBar() {
    return (
        <nav className='nav-items'>
            <div className='left-nav'>
                <div className='hamburger-container'>
                    <i class="fa-light fa-bars" />
                </div>
                <div>
                    <NavLink to='/' exact={true} activeClassName='active' className='navlink'>
                        <div className='nav-logo'>
                            <i class="fa-brands fa-youtube" />
                            <div>
                                YuhTube
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
            <SearchBar />
            <div className='right-nav'>
                <i class="fa-light fa-video-plus" />
                <LogoutButton />
            </div>

        </nav>
    )
}
