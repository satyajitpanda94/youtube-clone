import React, { useEffect, useState } from 'react'
import './css/ChannelCard.css'
import { fetchFromApi } from '../utils/fetchFromApi'
import { Check } from 'phosphor-react'
import { numberFormater } from '../utils/numberFormater'
import { Link } from 'react-router-dom'

export default function ChannelCard({ id }) {
    const [channelData, setChannelData] = useState({})
    useEffect(() => {
        fetchFromApi(`channels?id=${id}&part=statistics`)
            .then(data => setChannelData(data?.items?.[0]))
    }, [id])

    return (
        <Link to={`/channel/${id}`} className="channel-Details">
            <img src={channelData?.snippet?.thumbnails?.high?.url} alt="logo" />
            <div className='channel-title'>
                {channelData?.snippet?.title}
                <Check className='check-circle' />
            </div>
            {
                channelData?.statistics?.subscriberCount &&
                <div>
                    {numberFormater(channelData?.statistics?.subscriberCount)} subscribers
                </div>
            }
        </Link>
    )
}
