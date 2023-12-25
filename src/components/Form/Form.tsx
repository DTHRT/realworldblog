import styles from "./Form.module.scss";

interface Props {
  title?: string;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  submitText?: string;
  footerText?: React.ReactNode;
}

const Form: React.FC<Props> = ({
  title,
  children,
  onSubmit,
  submitText,
  footerText,
}) => {
  return (
    <form className={styles.Form} onSubmit={onSubmit}>
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
