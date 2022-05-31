import './HomePage.css'
import { useSelector, useDispatch } from "react-redux";
import LeftNav from '../LeftNav';
import React, { useEffect } from 'react';
import { getVideos } from '../../store/videos';

export default function HomePage() {


    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state?.session?.user)
    const videos = useSelector(state => state?.videos.list)
    console.log(videos)
    console.log(sessionUser)

    useEffect(() => {
        dispatch(getVideos())
    }, [])

    return (
        <div className='homepage-container'>
            <LeftNav />
            <h1>My Home Page</h1>
            <div className='videos'>{videos?.map((video, index) => (
                <span>{video.title}</span>
            ))}</div>
        </div>
    )
}
