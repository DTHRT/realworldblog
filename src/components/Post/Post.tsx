import styles from "./Post.module.scss";
import Tag from "../Tag";
import Like from "../Like";
import classNames from "classnames";

interface Props {
  article: any;
}

const Post: React.FC<Props> = ({ article }) => {
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
            <h3
              className={classNames(styles.Post__title, {
                [styles.Post__titleLong]: title.length > 100,
              })}
            >
              {title}
            </h3>
            <Like className={styles.Post__like} likes={favoritesCount} />
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
            <h4 className={styles.Post__authorName}>John Doe</h4>
            <p className={styles.Post__authorDate}>March 5, 2020</p>
          </div>
          <img className={styles.Post__authorAvatar} src={image} alt="User" />
        </div>
      </header>

      <p className={styles.Post__body}>{description}</p>
    </article>
  );
};

export default Post;
