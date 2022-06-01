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
    }, [dispatch])

    return (
        <div className='homepage-container'>
            <LeftNav />
            <div className='videos-container'>
                <h1>My Home Page</h1>
                <div className='videos'>{videos?.map((video, index) => (
                    <video key={index} src={video.s3_url}></video>
                ))}</div>
            </div>
        </div>
    )
}
