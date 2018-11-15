import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {

    const thumbnail = video.snippet.thumbnails.medium.url,
          title = video.snippet.title;

    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img 
                className="ui image"
                src={thumbnail} 
                alt={title} 
            />
            <div className="content">
                <div className="header">{title}</div>
            </div>
        </div>
    ); 
}

export default VideoItem;