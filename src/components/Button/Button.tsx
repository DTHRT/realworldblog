import styles from "./Button.module.scss";
import classNames from "classnames";

interface Props {
  type?: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "success" | "create-article" | "black" | undefined;
  className?: string;
  [key: string]: any;
}
const Button: React.FC<Props> = ({
  type = "submit",
  children,
  onClick,
  variant = "default",
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      className={classNames(
        className ? className : styles.Button,
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
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
