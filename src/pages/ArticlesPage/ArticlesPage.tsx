import { useEffect, useState } from "react";
import Api from "../../services/api";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import PostList from "../../components/PostList";
import Post from "../../components/Post";
import Pagination from "../../components/Paginataion";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const api = new Api();

  useEffect(() => {
    try {
      setLoading(true);
      api.getPosts().then(({ articles, articlesCount }) => {
        setArticles(articles);
        setTotalArticles(articlesCount);
        setPages(articlesCount / 5);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const handlePageClick = (event: any) => {
    setLoading(true);
    const newOffset = (event.selected * 5) % totalArticles;

    try {
      api.getPosts(newOffset).then(({ articles }) => {
        setArticles(articles);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      {loading ? (
        <Loader />
      ) : (
        <div>
          <PostList>
            {articles.map((article) => {
              return <Post article={article} />;
            })}
          </PostList>

          <Pagination pageCount={pages} handlePageClick={handlePageClick} />
        </div>
      )}
    </>
  );
}

export default ArticlesPage;
