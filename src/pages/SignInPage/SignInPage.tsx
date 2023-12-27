import Form from "../../components/Form";
import InputText from "../../components/InputText";
import { Link } from "react-router-dom";
import styles from "./SignInPage.module.scss";

const SignInPage = () => {
  return (
    <Form
      className={styles.SignInPage__form}
      title="Sign In"
      onSubmit={(e) => console.log(e)}
      submitText="Login"
      footerText={
        <>
          Don’t have an account? <Link to="/sign-up">Sign Up</Link>.
        </>
      }
    >
      <InputText
        type="email"
        label="Email address"
        name="email"
        placeholder="Email address"
        value=""
        onChange={() => {}}
      />

      <InputText
        type="password"
        label="Password"
        name="password"
        placeholder="Password"
        value=""
        onChange={() => {}}
      />
    </Form>
  );
};

export default SignInPage;
