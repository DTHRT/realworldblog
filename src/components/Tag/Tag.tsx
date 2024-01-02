import React from 'react'
import classNames from 'classnames'

import styles from './Tag.module.scss'

interface Props {
  text: string
}
// eslint-disable-next-line react/function-component-definition
const Tag: React.FC<Props> = ({ text }) => {
  if (!text) return null

  return (
    <span
      className={classNames(styles.Tag, {
        [styles.Tag__long]: text.length > 20,
      })}
    >
      {text}
    </span>
  )
}

export default Tag
