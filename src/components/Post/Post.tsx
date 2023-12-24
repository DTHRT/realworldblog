import styles from "./Post.module.scss";
import Tag from "../Tag";
import Like from "../Like";
import classNames from "classnames";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";

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
            {tagList.map((tag: string) => (
              <li>
                <Tag text={tag} />
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.Post__headerAuthor}>
          <div className={styles.Post__author}>
            <h4 className={styles.Post__authorName}>{username}</h4>
            <p className={styles.Post__authorDate}>
              {format(new Date(updatedAt), "MMMM d, yyyy")}
            </p>
          </div>
          <img className={styles.Post__authorAvatar} src={image} alt="User" />
        </div>
      </header>

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
