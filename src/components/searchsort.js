import React from 'react'
import { useState } from 'react'
import SearchSortData from './searchsortData'

const SearchSort = () => {
    const [sort, setsort] = useState("rank")
    const [search, setSearch] = useState(null)

  return (
    <div>
        <h2>Searching & Sorting</h2>
        <div>
            <input type="search" placeholder='Search...' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            <button>Search</button>
        </div>
        <div>
            <select value={sort} onChange={(e)=>{setsort(e.target.value)}}>
                <option value="name">Name</option>
                <option value="age">Age</option>
                <option value="rank">Rank</option>
            </select>
            selected: {sort}
        </div>
        <div>
            <SearchSortData sortedValue={sort} searchedData={search}/>
        </div>

    </div>
  )
}

export default SearchSort