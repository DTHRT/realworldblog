import styles from "./Like.module.scss";
import classNames from "classnames";

interface Props {
  className?: string;
  active?: boolean;
  likes?: number;
  disabled?: boolean;
}
const Like: React.FC<Props> = ({ active, className, likes = 0, disabled }) => {
  return (
    <p className={classNames(styles.Like, className)}>
      <button
        className={classNames(styles.Like__button, {
          [styles.Like__buttonActive]: active,
        })}
        disabled={disabled}
      />

      <span className={styles.Like__counter}>{likes}</span>
    </p>
  );
};

export default Like;
