import React from "react";
import styles from "./Form.module.scss";
import classNames from "classnames";

interface Props {
  title?: string;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  submitText?: string;
  footerText?: React.ReactNode;
  className?: string;
  submitButtonClassName?: string;
}

const Form: React.FC<Props> = ({
  title,
  children,
  onSubmit,
  submitText,
  footerText,
  className,
  submitButtonClassName,
}) => {
  return (
    <form className={classNames(styles.Form, className)} onSubmit={onSubmit}>
      {title && <h2 className={styles.Form__title}>{title}</h2>}

      <div className={styles.Form__form}>{children}</div>

      <div className={styles.Form__footer}>
        <button
          type="submit"
          className={classNames(styles.Form__submit, submitButtonClassName)}
        >
          {submitText || "Submit"}
        </button>

        {footerText && <p className={styles.Form__footerText}>{footerText}</p>}
      </div>
    </form>
  );
};

export default Form;
