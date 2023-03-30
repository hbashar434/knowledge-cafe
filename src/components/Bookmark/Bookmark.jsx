import React from "react";

const Bookmark = ({ readingTime }) => {
  console.log(readingTime);

  return (
    <div className="card bg-gray-300 w-96 rounded-lg p-4">
      <h3 className="text-lg font-bold text-blue-900">
        Spent time on read : {readingTime} min
      </h3>
      <div className="mt-10">
        <h1 className=" text-xl font-bold mb-4">Bookmarked Blogs : </h1>
        <h2 className="card p-4 bg-white text-lg font-semibold rounded-md">
          Bookmark :
        </h2>
      </div>
    </div>
  );
};

export default Bookmark;
