import styles from "./Tag.module.scss";

interface Props {
  children?: React.ReactNode;
}
const Tag: React.FC<Props> = ({ children }) => {
  return <span className={styles.Tag}>{children}</span>;
};

export default Tag;
