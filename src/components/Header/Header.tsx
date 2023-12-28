import Button from "../Button";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import UserBlock from "../UserBlock";
import { logout } from "../../features/user/userSlice";

const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const { token, username } = user;

  const dispatch = useDispatch();

  const onLogOut = () => {
    localStorage.removeItem("user");
    dispatch(logout());
  };

  return (
    <header className={styles.Header}>
      <h1 className="title">Real World Blog</h1>
      <div className={styles.Header__buttons}>
        {token ? (
          <>
            <Link to="/create-article">
              <Button variant="create-article">Create article</Button>
            </Link>

            <UserBlock username={username} image="" />

            <Link to="/">
              <Button variant="black" onClick={onLogOut}>
                Log Out
              </Button>
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
