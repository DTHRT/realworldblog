import styles from "./InputCheckbox.module.scss";

interface Props {
  label: string;
  name: string;
  checked?: boolean;
  register: any;
  error?: any;
}

const InputCheckbox: React.FC<Props> = ({
  label,
  name,
  checked,
  register,
  error,
}) => {
  return (
    <label htmlFor={`${name}`} className={styles.InputCheckbox}>
      <span className={styles.InputCheckbox__inputWrapper}>
        <input
          type="checkbox"
          name={name}
          id={name}
          defaultChecked={checked}
          {...register}
        />

        <span className={styles.InputCheckbox__label}>{label}</span>
      </span>

      {error && <p className={styles.InputCheckbox__error}>{error.message}</p>}
    </label>
  );
};

export default InputCheckbox;
