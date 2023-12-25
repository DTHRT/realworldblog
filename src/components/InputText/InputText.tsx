import styles from "./InputText.module.scss";

interface Props {
  type: "text" | "password" | "email";
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<Props> = ({
  type,
  label,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <label htmlFor={`#${name}`} className={styles.InputText}>
      <span className={styles.InputText__label}>{label}</span>

      <input
        className={styles.InputText__input}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={onChange}
        id={name}
      />
    </label>
  );
};

export default InputText;
