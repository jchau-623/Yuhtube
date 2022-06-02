import LeftNav from '../LeftNav';
import React from 'react';
import './LibraryPage.css'

export default function LibraryPage() {
    return (
        <div className='page-container'>
            <LeftNav />
            <div className='page-content'>
            <h1>My Library Page</h1>
            </div>
        </div>
    )
}
