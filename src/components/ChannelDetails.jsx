import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromApi } from '../utils/fetchFromApi'
import { Items } from './'
import './css/ChannelDetails.css'
import { numberFormater } from '../utils/numberFormater'
import { Check } from 'phosphor-react'

export default function ChannelDetails() {
  const { id } = useParams()

  const [channelData, setChannelData] = useState({})
  const [channelVideos, setChannelVideos] = useState([])

  useEffect(() => {
    fetchFromApi(`channels?id=${id}&part=statistics`)
      .then(data => setChannelData(data?.items?.[0]))
    fetchFromApi(`search?channelId=${id}&order=date`)
      .then(data => setChannelVideos(data.items))
  }, [id])

  return (
    <div className='channel-details-container'>
      <div className="banner">
        <img src={channelData?.brandingSettings?.image?.bannerExternalUrl} alt="channel banner" />
      </div>
      <div className="channel-details">
        <img src={channelData?.snippet?.thumbnails?.high?.url} alt="logo" />
        <div className="text">
          <div style={{ fontSize: '2em' }}>
            {channelData?.snippet?.title}
            <Check className='check-circle' />
          </div>
          {
            <div style={{ color: 'grey' }}>
              {numberFormater(channelData?.statistics?.subscriberCount)} subscribers
              <span> </span>
              {numberFormater(channelData?.statistics?.videoCount)} videos
              <p>
                {channelData?.snippet?.description.slice(0, 90)}...
              </p>
            </div>
          }
        </div>

      </div>
      <div className='items-container'>
        <Items items={channelVideos} />
      </div>
    </div>
  )
}
