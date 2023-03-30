import React, { useEffect, useState } from "react";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header/Header";

const App = () => {
  const [blogs, setBlog] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  return (
    <div className=" my-8 p-4 md:mx-20">
      <Header></Header>
      <hr className="mt-3" />
      <div className="md:flex justify-between mt-6">
        <div>
          {blogs.map((blog) => (
            <Blog blog={blog} key={blog.id}></Blog>
          ))}
        </div>
        <div>
          <Bookmark></Bookmark>
        </div>
      </div>
    </div>
  );
};

export default App;
