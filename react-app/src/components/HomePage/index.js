import './HomePage.css'
import { useSelector, useDispatch } from "react-redux";
import LeftNav from '../LeftNav';
import React, { useEffect } from 'react';
import { getVideos } from '../../store/videos';

export default function HomePage() {


    const dispatch = useDispatch()

    const sessionUser = useSelector(state => state?.session?.user)
    const videos = useSelector(state => state?.videos.list)
    // console.log(videos)
    // console.log(sessionUser)

    useEffect(() => {
        dispatch(getVideos())
    }, [dispatch])

    return (
        <div className='homepage-container'>
            <LeftNav />
            <div className='videos-container'>
                <div className='videos-grid'>{videos?.map((video, index) => (
                    <video className='videos' key={index} src={video.video_url}>test</video>
                ))}</div>
            </div>
        </div>
    )
}
