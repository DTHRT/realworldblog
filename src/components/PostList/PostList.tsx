import styles from "./PostList.module.scss";
import React from "react";

interface Props {
  children?: React.ReactNode;
}
const PostList: React.FC<Props> = ({ children }) => {
  return <ul className={styles.PostList}>{children}</ul>;
};

export default PostList;
