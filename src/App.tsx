import React from "react";
import PostList from "@components/PostList";
import AddPost from "@components/AddPost";
import ScrollableIcon from '@components/ScrollableIcon';

const App: React.FC = () => {
  return (
    <div>
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-3xl font-bold text-center">
            Blog Post CRUD Operations with React, Vite, Redux, Typescript and Tailwind CSS
          </h1>
        </div>
      </nav>
      <div className="container mx-auto p-4">
        <AddPost />
        <PostList />
      </div>
      <ScrollableIcon />
    </div>
  );
};

export default App;
