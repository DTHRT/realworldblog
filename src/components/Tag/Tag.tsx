import styles from "./Tag.module.scss";
import classNames from "classnames";

interface Props {
  text: string;
}
const Tag: React.FC<Props> = ({ text }) => {
  if (!text) return null;

  return (
    <span
      className={classNames(styles.Tag, {
        [styles.Tag__long]: text.length > 20,
      })}
    >
      {text}
    </span>
  );
};

export default Tag;
