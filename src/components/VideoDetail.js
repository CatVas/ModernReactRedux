import React from 'react';


const VideoDetail = ({ video }) => {
  if(!video){
    return (
      <div className="video-detail col-md-8">
        Loading&hellip;
      </div>
    );
  }

  const { description, title } = video.snippet;
  const { videoId } = video.id;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="details">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
