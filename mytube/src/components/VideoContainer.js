import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    fetchVideo();
  }, []);
  const fetchVideo = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json.items);
    setVideo(json.items);
  };
  if (!video.length) return null;
  return (
    <div className="flex flex-wrap justify-evenly">
      {video.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
