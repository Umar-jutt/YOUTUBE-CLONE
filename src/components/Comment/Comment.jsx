import React from "react";
import moment from "moment";
import "./_Comment.scss";
const Comment = () => {
  return (
    <div className="comment p-2 d-flex">
      <img
        src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        alt=""
        className="rounder-circle me-3"
      />
      <div className="comment__body">
        <p className="comment__header mb-1">
          Talha Sheikh • {moment("8 months ago").fromNow()}
        </p>
        <p className="mb-0">NICE CLONE DUDE!!!</p>
      </div>
    </div>
  );
};

export default Comment;
