import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/constants";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    fetchVideo();
  }, []);
  const fetchVideo = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json.items);
    setVideo(json.items);
  };
  if (!video.length) return null;
  return (
    <div className="flex flex-wrap justify-evenly">
      {video.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
