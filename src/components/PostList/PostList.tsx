import styles from "./PostList.module.scss";

interface Props {
  children?: React.ReactNode;
}
const PostList: React.FC<Props> = ({ children }) => {
  return <ul className={styles.PostList}>{children}</ul>;
};

export default PostList;
