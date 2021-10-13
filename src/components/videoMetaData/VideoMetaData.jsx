import React from "react";
import "./_VideoMetaData.scss";
import moment from "moment";
import numeral from "numeral";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(10000).format("0.a")} Views •
            {moment("2021-06-07").fromNow()}
          </span>

          <div>
            <span className="ms-3">
              <MdThumbUp size={26} />
              {numeral(10000).format("0.a")}
            </span>
            <span className="ms-3">
              <MdThumbDown size={26} />
              {numeral(10000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            alt=""
            className="rounder-circle me-3"
          />
          <div className="d-flex flex-column">
            <span>Talha Sheikh</span>
            <span>{numeral(10000).format("0.a")}Subscribers</span>
          </div>
        </div>
        <button className="btn border-0 m-2">Subscribe</button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius
          nobis nostrum, veritatis vitae odio explicabo doloribus fugit qui
          beatae ipsum ex sunt vel dolorem aut. Quas consequuntur obcaecati
          assumenda alias, qui nihil fugiat sequi tempora a aspernatur nisi
          porro! Ullam sequi quisquam maiores harum alias modi eos, error
          incidunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vero eius nobis nostrum, veritatis vitae odio explicabo doloribus
          fugit qui beatae ipsum ex sunt vel dolorem aut. Quas consequuntur
          obcaecati assumenda alias, qui nihil fugiat sequi tempora a aspernatur
          nisi porro! Ullam sequi quisquam maiores harum alias modi eos, error
          incidunt!
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
