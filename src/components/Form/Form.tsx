import styles from "./Form.module.scss";

interface Props {
  children: React.ReactNode;
}

const Form: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.Form}>
      <h2 className={styles.Form__title}>Sign In</h2>

      <form className={styles.Form__form}>{children}</form>
    </div>
  );
};

export default Form;
