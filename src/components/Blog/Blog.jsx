import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Blog = (props) => {
  const { id, cover, image, name, title, date, time } = props.blog;
  const handleReadingTime = props.handleReadingTime;
  const addToBookmark = props.addToBookmark;

  return (
    <div className="card w-full mb-6 bg-base-100">
      <figure className="rounded-2xl">
        <img src={cover} alt="banner-image" />
      </figure>
      <div className="card-body px-0">
        <div className=" flex justify-between">
          <div className="flex">
            <figure className=" w-12 h-12 rounded-full mr-4">
              <img src={image} alt="author-image" />
            </figure>
            <div>
              <h3 className=" font-bold">{name}</h3>
              <p className=" text-xs font-semibold">{date}</p>
            </div>
          </div>
          <div>
            <p>
              {time} min read {""}
              <FontAwesomeIcon
                className=" cursor-pointer"
                icon={faBookmark}
                onClick={() => addToBookmark(props.blog)}
              />
            </p>
          </div>
        </div>
        <h2 className="card-title font-bold">{title}</h2>
        <p>#beginners #programming</p>
        <div className="card-actions">
          <button className=" btn-link" onClick={() => handleReadingTime(time)}>
            Mark as read
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Blog;
