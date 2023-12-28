import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PostPage from "./pages/PostPage";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";
import Header from "./components/Header";
import Container from "./components/Container";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login } from "./features/user/userSlice";
import { useEffect } from "react";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user") || "{}");
    const { user } = data;
    if (user) {
      dispatch(login(user));
    }
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/articles" />} />
            <Route exact path="/articles" component={ArticlesPage} />
            <Route exact path="/articles/:slug" component={PostPage} />
            <Route exact path="/sign-in" component={SignInPage} />
            <Route exact path="/sign-up" component={SignUpPage} />
            <Route exact path="/profile" component={ProfilePage} />
          </Switch>
        </Container>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Router>
    </>
  );
}

export default App;
