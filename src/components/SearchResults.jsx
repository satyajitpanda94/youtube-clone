import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi';
import Items from './Items';

export default function SearchResults() {
  const { id } = useParams();
  const [searchData, setSearchData] = useState([])

  useEffect(() => {
    fetchFromApi(`search?q=${id}&part=statistics`)
      .then(data => setSearchData(data.items))
  }, [id])

  return (
    <div className='items-container'>
      <Items items={searchData}/>
    </div>
  )
}
