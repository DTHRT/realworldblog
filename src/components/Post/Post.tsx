import styles from "./Post.module.scss";
import Tag from "../Tag";
import Like from "../Like";
import classNames from "classnames";
import { Link, useHistory } from "react-router-dom";
import Markdown from "react-markdown";
import UserBlock from "../UserBlock";
import Button from "../Button";
import { useSelector } from "react-redux";
import Api from "../../services/api";
import { toast } from "react-toastify";

interface Props {
  article: any;
  full?: boolean;
}

const Post: React.FC<Props> = ({ article, full }) => {
  const {
    title,
    slug,
    description,
    tagList,
    favoritesCount,
    author,
    updatedAt,
  } = article;
  const { username, image } = author;
  const { username: currentUsername, token } = useSelector(
    (state: any) => state.user,
  );
  const api = new Api();
  const history = useHistory();

  const deleteArticle = async () => {
    if (!token) {
      return toast.error("Please sign in");
    }

    const response = await api.deletePost(slug, token);

    const { errors } = response;

    if (errors) {
      const errorMessages = Object.entries(errors)
        .map(([key, value]) => `${key}: ${value}`)
        .join(" ");

      return toast.error(errorMessages);
    }

    toast.success("Article deleted successfully");
    history.push("/");
  };

  return (
    <article className={styles.Post}>
      <header className={styles.Post__header}>
        <div className={styles.Post__headerContent}>
          <div className={styles.Post__headingWrapper}>
            {full ? (
              <h3
                className={classNames(styles.Post__title, {
                  [styles.Post__titleLong]: title.length > 100,
                })}
              >
                {title}
              </h3>
            ) : (
              <Link to={`articles/${slug}`}>
                <h3
                  className={classNames(styles.Post__title, {
                    [styles.Post__titleLong]: title.length > 100,
                  })}
                >
                  {title}
                </h3>
              </Link>
            )}

            <Like
              className={styles.Post__like}
              likes={favoritesCount}
              disabled={true}
            />
          </div>

          <ul className={styles.Post__tags}>
            {tagList.map((tag: string, index: number) => (
              <li key={`${index}_${updatedAt}`}>
                <Tag text={tag} />
              </li>
            ))}
          </ul>
        </div>

        <UserBlock username={username} image={image} date={updatedAt} />
      </header>

      {full && currentUsername === username && (
        <div className={styles.Post__myPost}>
          <Button
            className={classNames(
              styles.Post__myPostButton,
              styles.Post__myPostButtonDelete,
            )}
            onClick={deleteArticle}
          >
            Delete
          </Button>
          <Link to={`/articles/${slug}/edit`}>
            <Button
              className={classNames(
                styles.Post__myPostButton,
                styles.Post__myPostButtonEdit,
              )}
            >
              Edit
            </Button>
          </Link>
        </div>
      )}

      {description && (
        <p
          className={classNames(styles.Post__body, {
            [styles.Post__bodyLong]: description.length > 100,
          })}
        >
          {full ? (
            <Markdown className="markdown-body">{description}</Markdown>
          ) : (
            <>{description}</>
          )}
        </p>
      )}
    </article>
  );
};

export default Post;
