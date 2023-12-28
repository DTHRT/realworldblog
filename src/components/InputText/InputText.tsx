import styles from "./InputText.module.scss";
import classNames from "classnames";

interface Props {
  label: string;
  name: string;
  placeholder: string;
  register?: any;
  errors?: any;
}

const InputText: React.FC<Props> = ({
  label,
  name,
  placeholder,
  register,
  errors,
}) => {
  return (
    <label htmlFor={`${name}`} className={styles.InputText}>
      <span className={styles.InputText__label}>{label}</span>

      <input
        className={classNames(styles.InputText__input, {
          [styles.InputText__input_error]: errors,
        })}
        name={name}
        placeholder={placeholder}
        id={name}
        {...register}
      />

      {errors && <p className={styles.InputText__error}>{errors.message}</p>}
    </label>
  );
};

export default InputText;
