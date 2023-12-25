import Button from "../Button";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import UserBlock from "../UserBlock";

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  // const { email } = user;

  const email = "qwe@qwe.com";

  return (
    <header className={styles.Header}>
      <h1 className="title">Real World Blog</h1>
      <div className={styles.Header__buttons}>
        {email ? (
          <>
            <Link to="/create-article">
              <Button variant="create-article">Create article</Button>
            </Link>

            <UserBlock username="Dmitry" image="" />

            <Link to="/logout">
              <Button variant="black">Log Out</Button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/sign-in">
              <Button>Sign In</Button>
            </Link>
            <Link to="/sign-up">
              <Button variant="success">Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
