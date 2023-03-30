import React from "react";

const Blog = ({ blog }) => {
  const { id, cover, image, name, title, date, time } = blog;
  console.log(id);

  return (
    <div className="card w-full bg-base-100">
      <figure className=" rounded-2xl">
        <img src={cover} alt="banner-image" className=" w-full h-96" />
      </figure>
      <div className="card-body">
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
            <p>{time} min read</p>
          </div>
        </div>
        <h2 className="card-title font-bold">{title}</h2>
        <p>#beginners #programming</p>
        <div className="card-actions">
          <button className=" btn-link">Mark as read</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Blog;
