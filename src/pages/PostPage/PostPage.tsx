import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Post from "../../components/Post";
import Api from "../../services/api";
import styles from "./PostPage.module.scss";
import { useSelector } from "react-redux";

const PostPage = () => {
  const params = useParams();
  // @ts-ignore
  const { slug } = params;
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState(null);
  const api = new Api();
  const { token } = useSelector((state: any) => state.user);

  useEffect(() => {
    setLoading(true);
    getPost();
  }, []);

  const getPost = async () => {
    api.getPost(slug, token).then(({ article }) => {
      setArticle(article);
      setLoading(false);
    });
  };

  return loading ? (
    <Loader />
  ) : (
    article && (
      <div className={styles.PostPage}>
        <Post article={article} full={true} onLike={getPost} />
      </div>
    )
  );
};

export default PostPage;
