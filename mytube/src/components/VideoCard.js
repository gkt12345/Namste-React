import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { title, channelTitle, descriton, thumbnails, publishedAt } = snippet;
  const { commentCount, likeCount, viewCount } = statistics;
  return (
    <div className="w-[340px] h-[270px] border m-2">
      <img
        className="w-full h-48 rounded-xl"
        alt="video"
        src={thumbnails.standard.url}
      />
      <div className="px-1 mt-1">
        <div className="font-medium text-sm h-10 overflow-hidden">{title}</div>
        <div className=" text-xs font-medium text-gray-600 ">
          <div>{channelTitle}</div>
          <div>
            {parseInt(viewCount / 100000)}L View. {publishedAt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
