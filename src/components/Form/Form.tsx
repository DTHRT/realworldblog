import styles from "./Form.module.scss";
import classNames from "classnames";

interface Props {
  title?: string;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  submitText?: string;
  footerText?: React.ReactNode;
  className?: string;
}

const Form: React.FC<Props> = ({
  title,
  children,
  onSubmit,
  submitText,
  footerText,
  className,
}) => {
  return (
    <form className={classNames(styles.Form, className)} onSubmit={onSubmit}>
      {title && <h2 className={styles.Form__title}>{title}</h2>}

      <div className={styles.Form__form}>{children}</div>

      <div className={styles.Form__footer}>
        <button type="submit" className={styles.Form__submit}>
          {submitText || "Submit"}
        </button>

        {footerText && <p className={styles.Form__footerText}>{footerText}</p>}
      </div>
    </form>
  );
};

export default Form;
