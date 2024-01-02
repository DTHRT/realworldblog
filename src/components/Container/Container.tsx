import React from 'react'

import styles from './Container.module.scss'

interface Props {
  children: React.ReactNode
}

// eslint-disable-next-line react/function-component-definition
const Container: React.FC<Props> = ({ children }) => <main className={styles.Container}>{children}</main>

export default Container
