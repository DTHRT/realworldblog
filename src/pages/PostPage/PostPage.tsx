import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Post from "../../components/Post";
import Api from "../../services/api";
import styles from "./PostPage.module.scss";

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
  }, [slug]);

  return loading ? (
    <Loader />
  ) : (
    article && (
      <div className={styles.PostPage}>
        <Post article={article} full={true} />
      </div>
    )
  );
};

export default PostPage;
