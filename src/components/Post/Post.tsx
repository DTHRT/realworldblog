import styles from "./Post.module.scss";
import Tag from "../Tag";
import Like from "../Like";

interface Props {
  children?: React.ReactNode;
}

const Post: React.FC<Props> = ({ children }) => {
  return (
    <article className={styles.Post}>
      <header className={styles.Post__header}>
        <div className={styles.Post__headerContent}>
          <div className={styles.Post__headingWrapper}>
            <h3 className={styles.Post__title}>Some article title</h3>
            <Like className={styles.Post__like} />
          </div>

          <ul className={styles.Post__tags}>
            <li>
              <Tag>tag</Tag>
            </li>
            <li>
              <Tag>tag</Tag>
            </li>
          </ul>
        </div>

        <div className={styles.Post__headerAuthor}>
          <div className={styles.Post__author}>
            <h4 className={styles.Post__authorName}>John Doe</h4>
            <p className={styles.Post__authorDate}>March 5, 2020</p>
          </div>
          <img
            className={styles.Post__authorAvatar}
            src="/user.png"
            alt="User"
          />
        </div>
      </header>

      <p className={styles.Post__body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>
    </article>
  );
};

export default Post;
