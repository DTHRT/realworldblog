/* eslint-disable */
import React, { useRef } from 'react'
import classNames from 'classnames'
import { Link, useHistory } from 'react-router-dom'
import Markdown from 'react-markdown'
import { useSelector } from 'react-redux'
import { Tooltip as ReactTooltip, TooltipRefProps } from 'react-tooltip'
import { toast } from 'react-toastify'

import Tag from '../Tag'
import Like from '../Like'
import UserBlock from '../UserBlock'
import Button from '../Button'
import Api from '../../services/api'
import Tooltip from '../Tooltip'
import { IArticle } from '../../services/types'

import styles from './Post.module.scss'

interface Props {
  article: IArticle
  full?: boolean
  onLike?: () => void
}

const Post: React.FC<Props> = ({ article, full, onLike }) => {
  const { title, slug, description, tagList, favoritesCount, author, updatedAt, favorited } = article

  const { username, image } = author
  const { username: currentUsername, token } = useSelector((state: any) => state.user)
  const api = new Api()
  const history = useHistory()
  const tooltipRef = useRef<TooltipRefProps>(null)

  // eslint-disable-next-line consistent-return
  const deleteArticle = async () => {
    if (!token) {
      return toast.error('Please sign in')
    }

    const response = await api.deletePost(slug, token)

    const { errors } = response

    if (errors) {
      const errorMessages = Object.entries(errors)
        .map(([key, value]) => `${key}: ${value}`)
        .join(' ')

      return toast.error(errorMessages)
    }

    toast.success('Article deleted successfully')
    history.push('/')
  }

  return (
    <article className={styles.Post}>
      <header className={styles.Post__header}>
        <div className={styles.Post__headerContent}>
          <div className={styles.Post__headingWrapper}>
            {full ? (
              <h3
                className={classNames(styles.Post__title, {
                  [styles.Post__titleLong]: title.length > 100,
                })}
              >
                {title}
              </h3>
            ) : (
              <Link to={`articles/${slug}`}>
                <h3
                  className={classNames(styles.Post__title, {
                    [styles.Post__titleLong]: title.length > 100,
                  })}
                >
                  {title}
                </h3>
              </Link>
            )}

            <Like
              className={styles.Post__like}
              likes={favoritesCount}
              disabled={!token}
              slug={slug}
              active={favorited}
              onClick={onLike}
            />
          </div>

          <ul className={styles.Post__tags}>
            {tagList.map((tag: string, index: number) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${index}_${updatedAt}`}>
                <Tag text={tag} />
              </li>
            ))}
          </ul>
        </div>

        <UserBlock username={username} image={image} date={updatedAt} />
      </header>

      {full && currentUsername === username && (
        <div className={styles.Post__myPost}>
          <Button
            className={classNames(styles.Post__myPostButton, styles.Post__myPostButtonDelete)}
            data-tooltip-id="my-tooltip"
          >
            Delete
          </Button>
          <Link to={`/articles/${slug}/edit`}>
            <Button className={classNames(styles.Post__myPostButton, styles.Post__myPostButtonEdit)}>Edit</Button>
          </Link>

          <ReactTooltip
            className={styles.Post__tooltip}
            id="my-tooltip"
            place="right"
            openOnClick
            clickable
            ref={tooltipRef}
          >
            <Tooltip
              onCancel={() => {
                tooltipRef.current?.close()
              }}
              onAccept={deleteArticle}
            />
          </ReactTooltip>
        </div>
      )}

      {description && (
        <p
          className={classNames(styles.Post__body, {
            [styles.Post__bodyLong]: description.length > 100,
          })}
        >
          {full ? <Markdown className="markdown-body">{description}</Markdown> : description}
        </p>
      )}
    </article>
  )
}

export default Post
