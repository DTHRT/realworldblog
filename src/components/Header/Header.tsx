import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Button from '../Button'
import { RootState } from '../../store'
import UserBlock from '../UserBlock'
import { logout } from '../../features/user/userSlice'

import styles from './Header.module.scss'

function Header() {
  const user = useSelector((state: RootState) => state.user)
  const { token, username, image } = user

  const dispatch = useDispatch()

  const onLogOut = () => {
    dispatch(logout())
  }

  return (
    <header className={styles.Header}>
      <Link to="/">
        <h1 className="title">Real World Blog</h1>
      </Link>
      <div className={styles.Header__buttons}>
        {token ? (
          <>
            <Link to="/new-article">
              <Button variant="create-article">Create article</Button>
            </Link>

            <UserBlock username={username} image={image} locatedInHeader />

            <Link to="/">
              <Button variant="black" onClick={onLogOut}>
                Log Out
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/sign-in">
              <Button>Sign In</Button>
            </Link>
            <Link to="/sign-up">
              <Button variant="success">Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
