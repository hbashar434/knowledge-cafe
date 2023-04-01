import React, { useEffect, useState } from "react";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Answer from "./components/Answer/Answer";

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
    const bookmarkExist = bookmarks.find(
      (existedBookmark) => existedBookmark.id === bookmark.id
    );
    if (!bookmarkExist) {
      const newBookmark = [...bookmarks, bookmark];
      setBookmarks(newBookmark);
    } else {
      toast(
        "“You Have Already Bookmarked This Blog” . You can’t use browser alert. If the blog title gets added in the list after toast alert we will accept it. That is, You can bookmark a blog multiple times. No worries!"
      );
      const newBookmark = [...bookmarks, bookmark];
      setBookmarks(newBookmark);
    }
  };

  return (
    <div className="my-8 p-4 container mx-auto">
      <Header></Header>
      <hr className="mt-3" />
      <div className="md:flex gap-4 mt-10">
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
      <div className="mt-10">
        <Answer></Answer>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
