import styles from "./Button.module.scss";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string | undefined;
}
const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = "default",
}) => {
  return (
    <button
      className={classNames(styles.Button, {
        [styles.Button__success]: variant === "success",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
