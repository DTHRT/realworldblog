import styles from "./InputCheckbox.module.scss";

interface Props {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

const InputCheckbox: React.FC<Props> = ({ label, name, onChange, checked }) => {
  return (
    <label htmlFor={`${name}`} className={styles.InputCheckbox}>
      <input
        type="checkbox"
        name={name}
        onChange={onChange}
        id={name}
        defaultChecked={checked}
      />

      <span className={styles.InputCheckbox__label}>{label}</span>
    </label>
  );
};

export default InputCheckbox;
