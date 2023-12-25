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

function App() {
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
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
