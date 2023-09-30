import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './css/SearchBar.css'
import { MagnifyingGlass, X } from 'phosphor-react'

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    const handleSearchTerm = (e) => {
        e.preventDefault()
        if(searchTerm)
           navigate(`/search/${searchTerm}`)
    }

    return (
        <form className="search-bar" onSubmit={handleSearchTerm}>
            <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <input type='submit' className='search-button'  value=''/>
            <MagnifyingGlass className='magnifying-glass'/>
            {
                searchTerm && <button
                    className='clear-search-input'
                    onClick={e => setSearchTerm('')}
                >
                    <X />
                </button>
            }
        </form>
    )
}
