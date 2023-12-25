import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import Post from "../../components/Post";
import Api from "../../services/api";
import PostList from "../../components/PostList";

const PostPage = () => {
  const params = useParams();
  // @ts-ignore
  const { slug } = params;
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState(null);
  const api = new Api();

  useEffect(() => {
    setLoading(true);
    api.getPost(slug).then(({ article }) => {
      setArticle(article);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <PostList>
        {loading ? (
          <Loader />
        ) : (
          article && <Post article={article} full={true} />
        )}
      </PostList>
    </>
  );
};

export default PostPage;
