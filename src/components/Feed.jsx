import React, { useEffect, useState } from 'react'
import { fetchFromApi } from '../utils/fetchFromApi'
import {FeedNavbar, Items} from './'

export default function Feed() {
    const [items, setItems] = useState([])
    const [category, setCategory] = useState('video');

    useEffect(() => {
        fetchFromApi(`search?q=${category}&type=date`)
            .then(data => setItems(data.items))
    }, [category])


    return (
        <div className='items-container'>
            <FeedNavbar setCategory={setCategory} />
            <Items items={items} />
        </div>
    )
}

