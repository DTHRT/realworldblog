import Button from "../Button";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <h1 className="title">Real World Blog</h1>
      <div className="buttons">
        <Link to="/sign-in">
          <Button>Sign In</Button>
        </Link>
        <Link to="/sign-up">
          <Button variant="success">Sign Up</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
