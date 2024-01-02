/* eslint-disable */
import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

import styles from './UserBlock.module.scss'

interface Props {
  username: string
  image?: string
  date?: string
  locatedInHeader?: boolean
}

const UserBlock: React.FC<Props> = ({ username, image, date, locatedInHeader }) => (
  <>
    {locatedInHeader ? (
      <Link to="/profile">
        <div className={styles.UserBlock}>
          <div className={styles.UserBlock__author}>
            <h4 className={styles.UserBlock__authorName}>{username}</h4>

            {date && <p className={styles.UserBlock__authorDate}>{format(new Date(date), 'MMMM d, yyyy')}</p>}
          </div>

          <img className={styles.UserBlock__authorAvatar} src={image || '/user.png'} alt="User" />
        </div>
      </Link>
    ) : (
      <div className={styles.UserBlock}>
        <div className={styles.UserBlock__author}>
          <h4 className={styles.UserBlock__authorName}>{username}</h4>

          {date && <p className={styles.UserBlock__authorDate}>{format(new Date(date), 'MMMM d, yyyy')}</p>}
        </div>

        <img className={styles.UserBlock__authorAvatar} src={image || '/user.png'} alt="User" />
      </div>
    )}
  </>
)

export default UserBlock
