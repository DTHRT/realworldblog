import styles from "./Button.module.scss";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "success" | "create-article" | "black" | undefined;
}
const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = "default",
}) => {
  return (
    <button
      className={classNames(
        styles.Button,
        {
          [styles.Button__success]: variant === "success",
        },
        {
          [styles.Button__createArticle]: variant === "create-article",
        },
        {
          [styles.Button__black]: variant === "black",
        },
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
