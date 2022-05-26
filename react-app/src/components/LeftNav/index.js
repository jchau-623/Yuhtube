import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import './LeftNav.css'

export default function LeftNav() {

    const body = document.querySelector('body')
    body.style.margin = '0'

    const [isHomePage, setIsHomePage] = useState(false)

    // console.log(window.location.href);
    // If the url is set to '/', set isHomePage to true


    useEffect(() => {
        if (window.location.href === 'http://localhost:3000/' || window.location.href === 'http://localhost:3000') {
            setIsHomePage(true)

        } else {
            setIsHomePage(false)
        }
    }, []);

    return (
        <div className='leftnav-container'>

            <NavLink to='/' exact={true} activeClassName='active' className='navlink'>
            <div className={`leftnav-home ${isHomePage ? 'highlighted' : ''}`} >
            <i class="fa-solid fa-house" />
            Home
            </div>
            </NavLink>

        </div>
    )
}
