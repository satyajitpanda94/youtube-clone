import React from 'react'
import { formatDate } from '../utils/formatDate'
import './css/VideoCard.css'
import { Check } from 'phosphor-react'
import { Link } from 'react-router-dom'

export default function VideoCard({ video }) {

  return (
    <div className="video-card">
      <Link to={`/video/${video?.id?.videoId}`} className="video">
        <img src={
          video?.snippet?.thumbnails?.high ? video?.snippet?.thumbnails?.high?.url : video?.snippet?.thumbnails?.default?.url
        }
          alt="thumbnail" />
        <div className='title'>{video?.snippet?.title.slice(0, 90)} </div>
      </Link>

      <div className="text">
        <Link to={`/channel/${video?.snippet?.channelId}`} className="channel-title">
          {video?.snippet?.channelTitle}
          <Check className='check-circle' />
        </Link>
        {
          video?.snippet?.liveBroadcastContent === 'live' ? <div style={{
            backgroundColor: 'red', color: 'white', paddingInline: '5px', width: '50px', textAlign: 'center'
          }}>Live</div> :
            <div>{formatDate(video?.snippet?.publishedAt)}</div>
        }
        {
          video?.snippet?.liveBroadcastContent?.live &&
          <div className='time'>Live</div>
        }
      </div>
    </div>
  )
}
