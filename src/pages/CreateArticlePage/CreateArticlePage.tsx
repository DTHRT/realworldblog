import React from 'react'
import { useHistory } from 'react-router-dom'
import { FieldValues, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

import Form from '../../components/Form'
import InputText from '../../components/InputText'
import Api from '../../services/api'
import Textarea from '../../components/Textarea'
import Tags from '../../components/Tags'
import { RootState } from '../../store'

import styles from './CreateArticlePage.module.scss'

function CreateArticlePage() {
  const { token } = useSelector((state: RootState) => state.user)
  const history = useHistory()
  const api = new Api()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tags: [{ tag: '' }],
      description: '',
      title: '',
    },
  })

  const onSubmit = async (data: FieldValues) => {
    if (!token) {
      return toast.error('Please sign in')
    }

    const { title, description, tags } = data

    const tagList = tags.map((tag: { tag: string }) => tag.tag)

    const response = await api.createPost({ title, description, tagList }, token)

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
    <div className={styles.CreateArticlePage}>
      <Form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        className={styles.CreateArticlePage__form}
        title="Create new article"
        submitButtonClassName={styles.CreateArticlePage__formSubmitButton}
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

export default CreateArticlePage
