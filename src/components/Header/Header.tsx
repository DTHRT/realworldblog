import Button from "../Button";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <h1 className="title">Real World Blog</h1>
      <div className="buttons">
        <Button>Sign In</Button>
        <Button variant="success">Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;
