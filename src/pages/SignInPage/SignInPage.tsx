import Form from "../../components/Form";
import InputText from "../../components/InputText";
import { Link, useHistory } from "react-router-dom";
import styles from "./SignInPage.module.scss";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { login } from "../../features/user/userSlice";
import Api from "../../services/api";
import { useDispatch } from "react-redux";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const api = new Api();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (data: any) => {
    const { email, password } = data;

    const response = await api.login({ email, password });

    const { errors, user } = response;

    if (errors) {
      const errorMessages = Object.entries(errors)
        .map(([key, value]) => `${key}: ${value}`)
        .join(" ");

      return toast.error(errorMessages);
    }

    toast.success("Logged in successfully");
    dispatch(login(user));
    history.push("/");
  };

  return (
    <Form
      onSubmit={handleSubmit((data) => onSubmit(data))}
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
