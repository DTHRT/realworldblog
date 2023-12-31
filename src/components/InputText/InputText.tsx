/* eslint-disable */
import React from 'react'
import classNames from 'classnames'

import styles from './InputText.module.scss'

interface Props {
  label?: string
  name: string
  placeholder: string
  register: any
  error?: any
}

const InputText: React.FC<Props> = ({ label, name, placeholder, register, error }) => (
  <label htmlFor={`${name}`} className={styles.InputText}>
    {label && <span className={styles.InputText__label}>{label}</span>}

    <input
      className={classNames(styles.InputText__input, {
        [styles.InputText__input_error]: error,
      })}
      name={name}
      placeholder={placeholder}
      id={name}
      {...register}
    />

    {error && <p className={styles.InputText__error}>{error.message}</p>}
  </label>
)

export default InputText
