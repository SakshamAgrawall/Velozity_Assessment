import axios from 'axios';
import React, { useState } from 'react';
import { useSearch } from '../../context/search';

const SearchInput = () => {
    const [values, SetValues] = useState()
    const [movie, setMovie] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.get(`https://www.omdbapi.com/?s=${values.keyword}&apikey=66902864/`);
            setMovie(data)

        } catch (error) { }
    }

    return (
        <div>
            <form className='d-flex' role='search' onSubmit={handleSubmit}>
                <input className="form-control mr-sm-1 mx-2" type="search" placeholder="Enter Product" aria-label="Search"
                    value={values.keyword}
                    onChange={(e) => SetValues({ e.target.value })}
                />
                <button className="btn btn-outline-success my-4 my-sm-0" type="submit">Search</button>
            </form>
        </div>

    )
}


export default SearchInput
