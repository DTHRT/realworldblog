import Form from "../../components/Form";
import InputText from "../../components/InputText";
import { Link } from "react-router-dom";
import InputCheckbox from "../../components/InputCheckbox";

const SignUpPage = () => {
  return (
    <Form
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
        type="text"
        label="Username"
        name="username"
        placeholder="Username"
        value=""
        onChange={() => {}}
      />

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

      <InputText
        type="password"
        label="Reepat Password"
        name="repeat-password"
        placeholder="Repeat Password"
        value=""
        onChange={() => {}}
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
