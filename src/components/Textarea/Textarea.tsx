import React from "react";

import styles from "./Textarea.module.scss";
import classNames from "classnames";

interface Props {
  label: string;
  name: string;
  placeholder: string;
  register: any;
  error?: any;
}

const Textarea: React.FC<Props> = ({
  label,
  name,
  placeholder,
  register,
  error,
}) => {
  return (
    <label htmlFor={`${name}`} className={styles.Textarea}>
      <span className={styles.Textarea__label}>{label}</span>

      <textarea
        className={classNames(styles.Textarea__input, {
          [styles.Textarea__input_error]: error,
        })}
        name={name}
        placeholder={placeholder}
        id={name}
        {...register}
        rows={10}
      />

      {error && <p className={styles.Textarea__error}>{error.message}</p>}
    </label>
  );
};

export default Textarea;
