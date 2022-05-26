import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton'
import './NavBar.css'
import SearchBar from './SearchBar';


export default function NavBar() {

    const videos = useSelector(state => state?.videos?.list)

    const [filteredVideos, setFilteredVideos] = useState([])

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
            <div className='searchbar-container'>
            <SearchBar videos={videos} setFilteredVideos={setFilteredVideos} filteredVideos={filteredVideos} />
            </div>
            <div className='right-nav'>
                <i class="fa-light fa-video-plus" />
                <LogoutButton />
            </div>

        </nav>
    )
}
