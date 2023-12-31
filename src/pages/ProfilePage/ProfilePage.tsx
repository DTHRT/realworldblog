/* eslint-disable */
import React from 'react'
import Form from '../../components/Form'
import InputText from '../../components/InputText'
import { useHistory } from 'react-router-dom'
import styles from './ProfilePage.module.scss'
import { FieldValues, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { login } from '../../features/user/userSlice'
import Api from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { RootState } from '../../store'

const ProfilePage = () => {
  const { username, email, token, image } = useSelector((state: RootState) => state.user)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  useEffect(() => {
    reset({
      username,
      email,
      image,
    })
  }, [username, email, image])

  const api = new Api()
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = async (data: FieldValues) => {
    const { email, username, image, password } = data
    const response = await api.editProfile({ email, username, image, password }, token ? token : '')

    const { errors, user } = response

    if (errors) {
      const errorMessages = Object.entries(errors)
        .map(([key, value]) => `${key}: ${value}`)
        .join(' ')

      return toast.error(errorMessages)
    }

    toast.success('Logged in successfully')
    dispatch(login(user))
    history.push('/')
  }

  return (
    <Form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className={styles.ProfilePage__form}
      title="Edit Profile"
      submitText="Save"
    >
      <InputText
        register={{
          ...register('username', {
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters',
            },
            maxLength: {
              value: 20,
              message: 'Username must be less than 20 characters',
            },
          }),
        }}
        error={errors['username']}
        label="Username"
        name="username"
        placeholder="Username"
      />

      <InputText
        register={{
          ...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }),
        }}
        error={errors['email']}
        label="Email address"
        name="email"
        placeholder="Email address"
      />

      <InputText
        register={{
          ...register('password', {
            required: 'New password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
            maxLength: {
              value: 40,
              message: 'Password must be less than 40 characters',
            },
          }),
        }}
        error={errors['password']}
        label="New Password"
        name="password"
        placeholder="New Password"
      />

      <InputText
        register={{
          ...register('image', {
            required: 'This field is required',
            pattern: {
              value: /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/,
              message: 'Invalid url',
            },
          }),
        }}
        error={errors['image']}
        label="Avatar image (url)"
        name="image"
        placeholder="Avatar image"
      />
    </Form>
  )
}

export default ProfilePage
