import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({videos, filteredVideos, setFilteredVideos}) {
    const [searchText, setSearchText] = useState('')


    let inputHandler = (e) => {
        setSearchText(e.target.value);
        const NewVideosList = [];
        if (e.target.value === '') {
            setFilteredVideos(videos);
        } else {
            filteredVideos.forEach((video) => {
                if (video.title.toLowerCase().includes(e.target.value.toLowerCase())) {
                    NewVideosList.push(video)
                }
            })
            setFilteredVideos(NewVideosList)
        }
    }

    return (
        <div>
            <form className="searchbar-container">
                <input
                    className="searchbar-input"
                    type="text"
                    placeholder="Search"
                    onChange={inputHandler}
                    value={searchText}
                />
                <button className="search-button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    )
}
