import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import './UploadForm.css'

export default function UploadForm({ closeModal }) {

    const dispatch = useDispatch()
    const [video, setVideo] = useState(null)

    const handleUpload = (e) => {
        e.preventDefault()
    };

    return (
        <div className="upload-container">
            <div className="heading-container">
                <h3 className="upload-heading">Upload videos</h3>
            </div>
            <div className="upload-body">
                <div className="upload-icon-container">
                    <i className="fa-solid fa-up-from-line"></i>
                </div>

                <p>
                    Drag and drop video files to upload
                </p>
                <p>
                    Your videos will be private until you publish them.
                </p>
                <button className="choose-file-btn">SELECT FILES</button>
                <input
                    type='file'
                    onChange={handleUpload}
                />
            </div>
            <div className="upload-footer">
                <p className="footer-disclosure">
                    By submitting your videos to YuhTube, you acknowledge that you agree to absoluely nothing!
                </p>
            </div>
        </div>
    )
}
