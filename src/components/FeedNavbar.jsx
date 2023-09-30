import React from 'react'
import './css/FeedNavbar.css'
import { categories } from '../utils/constants'

export default function FeedNavbar({setCategory}) {

    return (
        <div className='feed-navbar'>
            {
                categories.map((category, idx) => (
                    <button key={idx} onClick={(e)=>{setCategory(category)}}>
                        {category}
                    </button>
                ))
            }
        </div>
    )
}
