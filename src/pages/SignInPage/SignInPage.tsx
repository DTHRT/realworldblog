import Form from "../../components/Form";
import InputText from "../../components/InputText";
import { Link } from "react-router-dom";
import styles from "./SignInPage.module.scss";
import { useForm } from "react-hook-form";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(errors);

  return (
    <Form
      onSubmit={handleSubmit((data) => console.log(data))}
      className={styles.SignInPage__form}
      title="Sign In"
      submitText="Login"
      footerText={
        <>
          Don’t have an account? <Link to="/sign-up">Sign Up</Link>.
        </>
      }
    >
      <InputText
        label="Email address"
        name="email"
        placeholder="Email address"
        register={{ ...register("email", { required: "Email is required" }) }}
        error={errors["email"]}
      />

      <InputText
        label="Password"
        name="password"
        placeholder="Password"
        register={{
          ...register("password", {
            required: "Password is required",
          }),
        }}
        error={errors["password"]}
      />
    </Form>
  );
};

export default SignInPage;
