import React, { useState } from "react";

export default function SearchBar () {
    const [searchText, setSearchText] = useState('')

    return (
        <form className="searchbar-container">
            <input
                className="searchbar-input"
                type="text"
                placeholder="Search"
                // onChange={(e) => (e)}
                value={searchText}
            />
        <i class="fa-solid fa-magnifying-glass"></i>
        </form>
    )
}
