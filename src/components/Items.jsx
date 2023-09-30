import React from 'react'
import {ChannelCard, VideoCard} from './'


export default function Items({items}) {
  return (
    <>
      {
        items.map((item, idx) => (
          <div key={idx}>
            {item?.id?.videoId && <VideoCard video={item} />}
            {item?.id?.channelId && <ChannelCard id={item?.id?.channelId} />}
          </div>
        ))
      }
    </>
  )
}
