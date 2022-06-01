import LeftNav from '../LeftNav';
import React from 'react';
import './TrendingsPage.css'

export default function TrendingPage() {
    return (
        <div className='trendingspage-container'>
            <LeftNav />
            <div className='trendings-content'>
            <h1>My Trendings Page</h1>
            </div>
        </div>
    )
}
