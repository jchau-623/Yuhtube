import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar() {
    const [searchText, setSearchText] = useState('')

    return (
        <div>
            <form className="searchbar-container">
                <input
                    className="searchbar-input"
                    type="text"
                    placeholder="Search"
                    // onChange={(e) => (e)}
                    value={searchText}
                />
                <button className="search-button">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    )
}
