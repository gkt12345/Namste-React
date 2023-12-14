import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-6 border-l">
        <CommentList comments={comment.reply} />
      </div>
    </div>
  ));
};

export default CommentList;
