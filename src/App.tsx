import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PostPage from "./pages/PostPage";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/articles" />} />
          <Route exact path="/articles" component={ArticlesPage} />
          <Route exact path="/articles/:slug" component={PostPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
