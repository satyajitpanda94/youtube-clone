import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import './css/VideoDetails.css'
import { fetchFromApi } from '../utils/fetchFromApi';
import {RelatedVideos} from './';
import { Check, ThumbsUp } from 'phosphor-react';
import { numberFormater } from '../utils/numberFormater';

export default function VideoDetails() {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState({})
  const [channelDetails, setchannelDetails] = useState({})
  const [relatedVideos, setRelatedVideos] = useState([])

  console.log(videoDetails)
  console.log(channelDetails)
  console.log(relatedVideos)

  useEffect(() => {
    try {
      fetchFromApi(`videos?id=${id}&part=statistics`)
        .then(data => setVideoDetails(data?.items?.[0]))

      fetchFromApi(`search?relatedToVideoId=${id}`)
        .then(data => setRelatedVideos(data?.items))
    } catch (err) {
      console.log(err)
    }

  }, [id])

  useEffect(() => {
    fetchFromApi(`channels?id=${videoDetails?.snippet?.channelId}&part=statistics`)
      .then(data => setchannelDetails(data.items?.[0]))
  }, [videoDetails])

  return (
    <div className='video-container'>
      <div className="video-details">
        <ReactPlayer className="player"
          url={`https://www.youtube.com/watch?v=${id}`}
          controls={true}
          playing
        />
        <div className="title">
          {videoDetails?.snippet?.title}
        </div>
        <div className='text-area'>
          <Link to={`/channel/${channelDetails?.id}`} className='channel-deatils'>
            <img src={channelDetails?.snippet?.thumbnails?.high?.url} alt="logo" />
            <div>
              {channelDetails?.snippet?.title}
              <Check className='check-circle' />
              <div>{numberFormater(channelDetails?.statistics?.subscriberCount)} subscribers</div>
            </div>
          </Link>
          <div className='like'>
            <ThumbsUp size={20} />
            {numberFormater(videoDetails?.statistics?.likeCount)}
          </div>
          <div className='views'>
            {numberFormater(videoDetails?.statistics?.viewCount)} <span>views</span>
          </div>
        </div>
      </div>
      {
        relatedVideos && <RelatedVideos relatedVideos={relatedVideos} />
      }
    </div>
  )
}
