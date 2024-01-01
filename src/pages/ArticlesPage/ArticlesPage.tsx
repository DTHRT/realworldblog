import React from "react";
import { useEffect, useState } from "react";
import Api from "../../services/api";
import Loader from "../../components/Loader";
import Post from "../../components/Post";
import Pagination from "../../components/Paginataion";
import PostList from "../../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { setArticles } from "../../features/articles/articlesSlice";
import { RootState } from "../../store";

function ArticlesPage() {
  const [totalArticles, setTotalArticles] = useState(0);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const api = new Api();
  const { token } = useSelector((state: RootState) => state.user);
  const { articles } = useSelector((state: RootState) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      setLoading(true);
      api
        .getPosts(0, 5, token ? token : "")
        .then(({ articles, articlesCount }) => {
          dispatch(setArticles(articles));
          setTotalArticles(articlesCount);
          setPages(Math.ceil(articlesCount / 5));
          setLoading(false);
        });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handlePageClick = async (event: { selected: number }) => {
    setLoading(true);
    const newOffset = (event.selected * 5) % totalArticles;

    try {
      const { articles } = await api.getPosts(newOffset, 5, token ? token : "");
      dispatch(setArticles(articles));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        articles?.length > 0 && (
          <PostList>
            {articles.map((article) => {
              const {
                author: { username },
                updatedAt,
              } = article;
              return (
                <Post article={article} key={`${updatedAt}-${username}`} />
              );
            })}
          </PostList>
        )
      )}

      <Pagination pageCount={pages} handlePageClick={handlePageClick} />
    </>
  );
}

export default ArticlesPage;
