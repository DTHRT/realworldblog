import React from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Post from "./components/Post";
function App() {
  return (
    <>
      <Header />
      <PostList>
        <Post />
      </PostList>
    </>
  );
}

export default App;
