import styles from "./Like.module.scss";
import classNames from "classnames";

interface Props {
  className?: string;
  active?: boolean;
  likes?: number;
}
const Like: React.FC<Props> = ({ active, className, likes = 0 }) => {
  return (
    <p className={classNames(styles.Like, className)}>
      <button
        className={classNames(styles.Like__button, {
          [styles.Like__buttonActive]: active,
        })}
      />

      <span className={styles.Like__counter}>{likes}</span>
    </p>
  );
};

export default Like;
