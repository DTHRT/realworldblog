import styles from "./Like.module.scss";
import classNames from "classnames";

interface Props {
  className?: string;
  active?: boolean;
}
const Like: React.FC<Props> = ({ active, className }) => {
  return (
    <p className={classNames(styles.Like, className)}>
      <button
        className={classNames(styles.Like__button, {
          [styles.Like__buttonActive]: active,
        })}
      />

      <span className={styles.Like__counter}>0</span>
    </p>
  );
};

export default Like;
