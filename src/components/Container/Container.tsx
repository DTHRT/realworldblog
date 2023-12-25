import styles from "./Container.module.scss";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <main className={styles.Container}>{children}</main>;
};

export default Container;
