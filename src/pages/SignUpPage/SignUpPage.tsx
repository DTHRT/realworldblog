import Form from "../../components/Form";
import InputText from "../../components/InputText";
import { Link } from "react-router-dom";
import InputCheckbox from "../../components/InputCheckbox";
import styles from "./SignUpPage.module.scss";

const SignUpPage = () => {
  return (
    <Form
      className={styles.SignUpPage__form}
      title="Sign Up"
      onSubmit={(e) => console.log(e)}
      submitText="Create"
      footerText={
        <>
          Already have an account? <Link to="/sign-in">Sign In</Link>.
        </>
      }
    >
      <InputText
        register={{}}
        label="Username"
        name="username"
        placeholder="Username"
      />

      <InputText
        register={{}}
        label="Email address"
        name="email"
        placeholder="Email address"
      />

      <InputText
        register={{}}
        label="Password"
        name="password"
        placeholder="Password"
      />

      <InputText
        register={{}}
        label="Reepat Password"
        name="repeat-password"
        placeholder="Repeat Password"
      />

      <InputCheckbox
        label="I agree to the processing of my personal
        information"
        name="policy"
        onChange={() => {}}
        checked={true}
      />
    </Form>
  );
};

export default SignUpPage;
