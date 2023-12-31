/* eslint-disable */

import React from 'react'
import classNames from 'classnames'

import styles from './Button.module.scss'

interface Props {
  type?: 'submit' | 'reset' | 'button' | undefined
  children: React.ReactNode
  onClick?: () => void
  variant?: 'default' | 'success' | 'create-article' | 'black' | undefined
  className?: string
  [key: string]: any
}
const Button: React.FC<Props> = ({ type = 'submit', children, onClick, variant = 'default', className, ...props }) => (
  <button
    type={type}
    className={classNames(
      className || styles.Button,
      {
        [styles.Button__success]: variant === 'success',
      },
      {
        [styles.Button__createArticle]: variant === 'create-article',
      },
      {
        [styles.Button__black]: variant === 'black',
      },
    )}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
)

export default Button
