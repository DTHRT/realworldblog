import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { FieldValues, useForm } from 'react-hook-form'

import Form from '../../components/Form'
import InputText from '../../components/InputText'
import Api from '../../services/api'
import Textarea from '../../components/Textarea'
import Tags from '../../components/Tags'
import { RootState } from '../../store'

import styles from './EditArticlePage.module.scss'

function EditArticlePage() {
  const { token } = useSelector((state: RootState) => state.user)
  const history = useHistory()
  const api = new Api()
  const params: { slug: string } = useParams()
  const { slug } = params

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({})

  useEffect(() => {
    api.getPost(slug).then((data) => {
      const { title, description, tagList } = data.article

      reset({
        title,
        description,
        tags: tagList.map((tag: { tag: string }) => ({ tag })),
      })
    })
  }, [])

  const onSubmit = async (data: FieldValues) => {
    if (!token) {
      return toast.error('Please sign in')
    }

    const { title, description, tags } = data

    const tagList = tags.map((tag: { tag: string }) => tag.tag)

    const response = await api.updatePost(slug, { title, description, tagList }, token)

    const { errors: errorsResp } = response

    if (errorsResp) {
      const errorMessages = Object.entries(errorsResp)
        .map(([key, value]) => `${key}: ${value}`)
        .join(' ')

      return toast.error(errorMessages)
    }

    toast.success('Article created successfully')
    history.push('/')
    return true
  }

  return (
    <div className={styles.EditArticlePage}>
      <Form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        className={styles.EditArticlePage__form}
        title="Edit article"
        submitButtonClassName={styles.EditArticlePage__formSubmitButton}
        submitText="Send"
      >
        <InputText
          label="Title"
          name="title"
          placeholder="Title"
          register={{
            ...register('title', {
              required: 'Title is required',
            }),
          }}
          error={errors.title}
        />

        <Textarea
          label="Text"
          name="description"
          placeholder="Text"
          register={{
            ...register('description', {
              required: 'Text is required',
            }),
          }}
          error={errors.description}
        />

        <Tags register={register} errors={errors} control={control} />
      </Form>
    </div>
  )
}

export default EditArticlePage
