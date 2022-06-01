import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LeftNav.css'

export default function LeftNav() {

    const body = document.querySelector('body')
    body.style.margin = '0'

    const [isHomePage, setIsHomePage] = useState(false)
    const [isTrendingPage, setIsTrendingPage] = useState(false)
    const [isSubscriptionPage, setIsSubscriptionPage] = useState(false)
    const [isLibraryPage, setIsLibraryPage] = useState(false)
    const [isHistoryPage, setIsHistoryPage] = useState(false)
    const [isYourVideosPage, setIsYourVideosPage] = useState(false)
    const [isWatchLaterPage, setIsWatchLaterPage] = useState(false)
    const [isLikedVideosPage, setIsLikedVideosPage] = useState(false)

    // console.log(window.location.href);
    // If the url is set to '/', set isHomePage to true

    useEffect(() => {
        if (window.location.href === 'http://localhost:3000/') {
            setIsHomePage(true)

        } else {
            setIsHomePage(false)
        }
    }, []);

    useEffect(() => {
        if (window.location.href === 'http://localhost:3000/trending') {
            setIsTrendingPage(true)

        } else {
            setIsTrendingPage(false)
        }
    }, [])

    useEffect(() => {
        if (window.location.href === 'http://localhost:3000/subscriptions') {
            setIsSubscriptionPage(true)

        } else {
            setIsSubscriptionPage(false)
        }
    }, [])

    useEffect(() => {
        if (window.location.href === 'http://localhost:3000/library') {
            setIsLibraryPage(true)

        } else {
            setIsLibraryPage(false)
        }
    }, []);

    useEffect(() => {
        if (window.location.href === 'http://localhost:3000/history') {
            setIsHistoryPage(true)

        } else {
            setIsHistoryPage(false)
        }
    }, []);

    useEffect(() => {
        if (window.location.href === 'http://localhost:3000/my-videos') {
            setIsYourVideosPage(true)

        } else {
            setIsYourVideosPage(false)
        }
    }, []);

    useEffect(() => {
        if (window.location.href === 'http://localhost:3000/watch-later') {
            setIsWatchLaterPage(true)

        } else {
            setIsWatchLaterPage(false)
        }
    }, []);

    useEffect(() => {
        if (window.location.href === 'http://localhost:3000/liked-videos') {
            setIsLikedVideosPage(true)

        } else {
            setIsLikedVideosPage(false)
        }
    }, []);

    return (
        <div className='leftnav-container'>
            <div className='leftnav-tophalf'>
                <NavLink to='/' exact={true} activeClassName='active' className='navlink'>
                    <div className={`leftnav-tab ${isHomePage ? 'highlighted' : ''}`} >
                        <i className="fa-solid fa-house" />
                        Home
                    </div>
                </NavLink>
                <NavLink to='/trending' exact={true} activeClassName='active' className='navlink'>
                    <div className={`leftnav-tab ${isTrendingPage ? 'highlighted' : ''}`} >
                        <i className="fa-solid fa-fire-flame-curved"></i>
                        Trending
                    </div>
                </NavLink>
                <NavLink to='/subscriptions' exact={true} activeClassName='active' className='navlink'>
                    <div className={`leftnav-tab ${isSubscriptionPage ? 'highlighted' : ''}`} >
                        <i className="fa-solid fa-layer-group" />
                        Subscriptions
                    </div>
                </NavLink>
            </div>
            <div className='leftnav-bothalf'>
                <NavLink to='/library' exact={true} activeClassName='active' className='navlink'>
                    <div className={`leftnav-tab ${isLibraryPage ? 'highlighted' : ''}`} >
                        <i className="fa-solid fa-circle-caret-right" />
                        Library
                    </div>
                </NavLink>
                <NavLink to='/history' exact={true} activeClassName='active' className='navlink'>
                    <div className={`leftnav-tab ${isHistoryPage ? 'highlighted' : ''}`} >
                    <i class="fa-solid fa-clock-rotate-left" />
                        History
                    </div>
                </NavLink>
                <NavLink to='/my-videos' exact={true} activeClassName='active' className='navlink'>
                    <div className={`leftnav-tab ${isYourVideosPage ? 'highlighted' : ''}`} >
                    <i class="fa-solid fa-cloud-arrow-up" />
                        Your videos
                    </div>
                </NavLink>
                <NavLink to='/watch-later' exact={true} activeClassName='active' className='navlink'>
                    <div className={`leftnav-tab ${isWatchLaterPage ? 'highlighted' : ''}`} >
                    <i className="fa-solid fa-clock" />
                        Watch later
                    </div>
                </NavLink>
                <NavLink to='/liked-videos' exact={true} activeClassName='active' className='navlink'>
                    <div className={`leftnav-tab ${isLikedVideosPage ? 'highlighted' : ''}`} >
                    <i className="fa-solid fa-thumbs-up" />
                        Liked videos
                    </div>
                </NavLink>
            </div>

        </div>
    )
}
