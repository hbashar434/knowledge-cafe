import React from "react";

const Bookmark = ({ readingTime, bookmarks }) => {
  console.log(bookmarks);

  return (
    <div className="w-96 rounded-lg p-4 sticky top-0">
      <h3 className="card border border-indigo-700 p-4 text-lg font-bold text-indigo-700">
        Spent time on read : {readingTime} min
      </h3>

      <div className="mt-10 bg-gray-200 rounded-lg">
        <div className=" p-4">
          <h1 className=" text-xl font-bold mb-4">
            Bookmarked Blogs : {bookmarks.length}
          </h1>
          {bookmarks.map((bookmark, index) => (
            <h2
              key={index}
              className=" mt-4 card p-4 bg-white text-lg font-semibold rounded-md"
            >
              {bookmark.title}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
