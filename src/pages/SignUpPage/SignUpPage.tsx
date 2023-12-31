/* eslint-disable */
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import Form from '../../components/Form'
import InputText from '../../components/InputText'
import InputCheckbox from '../../components/InputCheckbox'
import Api from '../../services/api'
import { login } from '../../features/user/userSlice'

import styles from './SignUpPage.module.scss'

function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const api = new Api()
  const dispatch = useDispatch()
  const history = useHistory()

  const onSubmit = async (data: FieldValues) => {
    const { username, email, password } = data

    const response = await api.register({ username, email, password })

    const { errors: respErrors, user } = response

    if (respErrors) {
      const errorMessages = Object.entries(respErrors)
        .map(([key, value]) => `${key}: ${value}`)
        .join(' ')

      return toast.error(errorMessages)
    }

    toast.success('User created successfully')
    dispatch(login(user))
    history.push('/')
    return true
  }

  return (
    <Form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className={styles.SignUpPage__form}
      title="Sign Up"
      submitText="Create"
      footerText={
        <>
          Already have an account? <Link to="/sign-in">Sign In</Link>.
        </>
      }
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
        error={errors.username}
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
        error={errors.email}
        label="Email address"
        name="email"
        placeholder="Email address"
      />

      <InputText
        register={{
          ...register('password', {
            required: 'Password is required',
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
        error={errors.password}
        label="Password"
        name="password"
        placeholder="Password"
      />

      <InputText
        register={{
          ...register('repeat-password', {
            required: 'This field is required',
            validate: (value, formValues) => value === formValues.password || 'Passwords do not match',
          }),
        }}
        error={errors['repeat-password']}
        label="Repeat Password"
        name="repeat-password"
        placeholder="Repeat Password"
      />

      <InputCheckbox
        label="I agree to the processing of my personal
        information"
        name="policy"
        checked
        register={{
          ...register('policy', {
            validate: (value) => value === true || 'You must agree to the processing of your personal information',
          }),
        }}
        error={errors.policy}
      />
    </Form>
  )
}

export default SignUpPage
