import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import './UploadForm.css'

export default function UploadForm({ closeModal }) {
    const
        fileInput = useRef(null);
    const dispatch = useDispatch();
    const [video, setVideo] = useState(null);

    const handleUpload = (e) => {
        e.preventDefault();
    }
        //update video state with current file    };
    const handleSimulateClick = () => { fileInput.current.click() }
        return (
            <div className="upload-container">
                <div className="heading-container">
                    <h3 className="upload-heading">Upload videos</h3>
                    <i onClick={closeModal} class="fa-solid fa-x"></i>
                </div>
                <div className="upload-body">
                    <div className="upload-icon-container">
                        <i className="fa-solid fa-up-from-line"></i>
                    </div>

                    <p className="first-line-upload">
                        Drag and drop video files to upload
                    </p>
                    <p className="second-line-upload">
                        Your videos will be private until you publish them.
                    </p>
                    <button
                        className="choose-file-btn"
                        onClick={handleSimulateClick}
                    >
                        SELECT FILES
                    </button>
                    <input
                        type='file'
                        onChange={handleUpload}
                        ref={fileInput}
                        style={{ display: 'none' }}
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
