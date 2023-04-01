import React, { useEffect, useState } from "react";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header/Header";

const App = () => {
  const [blogs, setBlog] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

  const handleReadingTime = (time) => {
    let spentTime = readingTime + time;
    setReadingTime(spentTime);
  };
  const addToBookmark = (bookmark) => {
    const newBookmark = [...bookmarks, bookmark];
    setBookmarks(newBookmark);
  };

  return (
    <div className=" my-8 p-4 mx-auto container">
      <Header></Header>
      <hr className="mt-3" />
      <div className="md:flex justify-between mt-10">
        <div>
          {blogs.map((blog) => (
            <Blog
              blog={blog}
              key={blog.id}
              handleReadingTime={handleReadingTime}
              addToBookmark={addToBookmark}
            ></Blog>
          ))}
        </div>
        <div>
          <Bookmark readingTime={readingTime} bookmarks={bookmarks}></Bookmark>
        </div>
      </div>
    </div>
  );
};

export default App;
