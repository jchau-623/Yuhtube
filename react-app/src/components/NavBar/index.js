import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton'
import './NavBar.css'
import SearchBar from './SearchBar';
import { Modal } from '../../context/Modal'
import UploadForm from '../UploadModal/UploadForm';



export default function NavBar() {

    const videos = useSelector(state => state?.videos?.list)

    const [filteredVideos, setFilteredVideos] = useState([])

    const [showModal, setShowModal] = useState(false)
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    // console.log(showModal);

    return (
        <>
            <nav className='nav-items'>
                <div className='left-nav'>
                    <div className='hamburger-container'>
                        <i className="fa-light fa-bars" />
                    </div>
                    <div>
                        <NavLink to='/' exact={true} activeClassName='active' className='navlink'>
                            <div className='nav-logo'>
                                <i className="fa-brands fa-youtube" />
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
                    <i className="fa-light fa-video-plus" onClick={openModal} />
                    <LogoutButton />
                </div>
                {showModal && (
                    <Modal onClose={closeModal}>
                        <UploadForm closeModal={closeModal} />
                    </Modal>
                )}
            </nav>

        </>
    )
}
