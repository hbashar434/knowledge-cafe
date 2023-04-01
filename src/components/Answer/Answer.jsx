import React from "react";

const Answer = () => {
  return (
    <div>
      <h2
        className="font-bold text-4xl
            my-8 text-center"
      >
        Question and Answers
      </h2>

      {/* { Props vs state  } */}
      <div className="card my-4 bg-indigo-600 text-black ">
        <div className="card-body">
          <h2 className="card-title text-2xl">1. Props vs state?</h2>
          <p className=" text-xl">
            In React, both props and state are used to manage and update data in
            components, but they serve different purposes. Props are short forms
            of properties, and they are passed from a parent component to a
            child component. On the other hand, State is used to manage data
            inside a component. Props are read-only, State is asynchronous.
            Props can be any type of data, such as objects, functions, strings
            or numbers. State is only used to store data that is necessary for
            the component's internal operations.
          </p>
        </div>
      </div>

      {/* { How does useState work? } */}
      <div className="card my-4 bg-indigo-400 text-black ">
        <div className="card-body">
          <h2 className="card-title text-2xl">2. How does useState work?</h2>
          <p className=" text-xl">
            useState() is a React Hook that lets you add a state variable to our
            component. It returns an array with two values. One is the current
            state and another is a function to update it.
          </p>
        </div>
      </div>

      {/* { Purpose of useEffect other than fetching data. } */}
      <div className="card my-4 bg-indigo-600 text-black ">
        <div className="card-body">
          <h2 className="card-title text-2xl">
            3. Purpose of useEffect other than fetching data?
          </h2>
          <p className=" text-xl">
            useEffect in react js allow us to perform side effects in your
            components. Fetching data is one of the most common use cases for
            useEffect, it can also be used for other purposes such as: Updating
            the title of the page, Managing timers, Setting up event listeners,
            Cleaning up after a component.
          </p>
        </div>
      </div>

      {/* { How Does React work? } */}
      <div className="card my-4 bg-indigo-400 text-black ">
        <div className="card-body">
          <h2 className="card-title text-2xl">4. How Does React work?</h2>
          <p className=" text-xl">
            React is a JavaScript library for building user interfaces. ReactJS
            divides the UI into isolated reusable pieces of code known as
            components, where each component is responsible for rendering a
            specific part of the UI. React is designed to be a flexible and
            efficient library for building user interfaces. By using components
            and the Virtual DOM, React is able to provide a high level of
            performance and a simple programming model for developers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Answer;
