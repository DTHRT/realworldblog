import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Post from "../../components/Post";
import Api from "../../services/api";
import styles from "./PostPage.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const PostPage = () => {
  const params: { slug: string } = useParams();
  const { slug } = params;
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState(null);
  const api = new Api();
  const { token } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    setLoading(true);
    getPost();
  }, []);

  const getPost = async () => {
    api.getPost(slug, token ? token : "").then(({ article }) => {
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
