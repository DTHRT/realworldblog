import Form from "../../components/Form";
import InputText from "../../components/InputText";
import { Link } from "react-router-dom";
import InputCheckbox from "../../components/InputCheckbox";
import styles from "./SignUpPage.module.scss";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Form
      onSubmit={handleSubmit((data) => console.log(data))}
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
          ...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
            maxLength: {
              value: 20,
              message: "Username must be less than 20 characters",
            },
          }),
        }}
        error={errors["username"]}
        label="Username"
        name="username"
        placeholder="Username"
      />

      <InputText
        register={{
          ...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }),
        }}
        error={errors["email"]}
        label="Email address"
        name="email"
        placeholder="Email address"
      />

      <InputText
        register={{
          ...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
            maxLength: {
              value: 40,
              message: "Password must be less than 40 characters",
            },
          }),
        }}
        error={errors["password"]}
        label="Password"
        name="password"
        placeholder="Password"
      />

      <InputText
        register={{
          ...register("repeat-password", {
            required: "This field is required",
            validate: (value, formValues) => {
              return (
                value === formValues["password"] || "Passwords do not match"
              );
            },
          }),
        }}
        error={errors["repeat-password"]}
        label="Repeat Password"
        name="repeat-password"
        placeholder="Repeat Password"
      />

      <InputCheckbox
        label="I agree to the processing of my personal
        information"
        name="policy"
        checked={true}
        register={{
          ...register("policy", {
            validate: (value) => {
              return (
                value === true ||
                "You must agree to the processing of your personal information"
              );
            },
          }),
        }}
        error={errors["policy"]}
      />
    </Form>
  );
};

export default SignUpPage;
