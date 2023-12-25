interface Props {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText: React.FC<Props> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <label htmlFor={`#${name}`}>
      <span>{label}</span>

      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={name}
      />
    </label>
  );
};

export default InputText;
