import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Loader from '../../components/Loader'
import Post from '../../components/Post'
import Api from '../../services/api'
import { RootState } from '../../store'

import styles from './PostPage.module.scss'

function PostPage() {
  const params: { slug: string } = useParams()
  const { slug } = params
  const [loading, setLoading] = useState(false)
  const [article, setArticle] = useState(null)
  const api = new Api()
  const { token } = useSelector((state: RootState) => state.user)

  const getPost = async () => {
    // eslint-disable-next-line no-shadow
    api.getPost(slug, token || '').then(({ article }) => {
      setArticle(article)
      setLoading(false)
    })
  }

  useEffect(() => {
    setLoading(true)
    getPost()
  }, [])
  return loading ? (
    <Loader />
  ) : (
    article && (
      <div className={styles.PostPage}>
        <Post article={article} full onLike={getPost} />
      </div>
    )
  )
}

export default PostPage
