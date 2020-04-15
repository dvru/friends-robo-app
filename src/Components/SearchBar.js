import React from 'react'

const SearchBar = ({ searchfield, searchChange}) => {
    return (
        <div>
            <input 
            className='pa3 ba b- -green bg-lightest-blue'
            type='search' 
            placeholder='search friends' 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBar;