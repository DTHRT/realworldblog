import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PostPage from "./pages/PostPage";
import ArticlesPage from "./pages/ArticlesPage/ArticlesPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/articles" />} />
          <Route exact path="/articles/:slug" component={PostPage} />
          <Route exact path="/articles" component={ArticlesPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
