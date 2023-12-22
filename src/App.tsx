import React, { useEffect } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Post from "./components/Post";
import Api from "./services/api";
function App() {
  const [articles, setArticles] = React.useState([]);

  useEffect(() => {
    const api = new Api();
    api.getPosts().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);

  return (
    <>
      <Header />
      <PostList>
        {articles.map((article) => {
          return <Post article={article} />;
        })}
      </PostList>
    </>
  );
}

export default App;
