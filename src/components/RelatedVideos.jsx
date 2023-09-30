import React from 'react'
import './css/VideoDetails.css'
import { VideoCard } from './'

export default function RelatedVideos({relatedVideos}) {
    return (
        <div className="related-videos">
            {
                relatedVideos.slice(0, 20).map((video, idx) => (
                    <VideoCard video={video} key={idx} />
                ))
            }
        </div>
    )
}
