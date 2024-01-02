/* eslint-disable */
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'

import PostPage from './pages/PostPage'
import ArticlesPage from './pages/ArticlesPage/ArticlesPage'
import Header from './components/Header'
import Container from './components/Container'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import ProfilePage from './pages/ProfilePage'
import { RootState } from './store'
import CreateArticlePage from './pages/CreateArticlePage'
import EditArticlePage from './pages/EditArticlePage'

interface PrivateRouteProps {
  component: React.ComponentType<any>
  isAuthenticated: boolean
  path: string
  exact?: boolean
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ component, isAuthenticated, ...rest }) => {
  const Component = component as React.ComponentType<any>
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />
        )
      }
    />
  )
}

function App() {
  const { token } = useSelector((state: RootState) => state.user)

  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/articles" />} />
          <Route exact path="/articles" component={ArticlesPage} />
          <Route exact path="/articles/:slug" component={PostPage} />
          <Route exact path="/sign-in" component={SignInPage} />
          <Route exact path="/sign-up" component={SignUpPage} />
          <PrivateRoute exact path="/new-article" component={CreateArticlePage} isAuthenticated={!!token} />
          <PrivateRoute exact path="/profile" component={ProfilePage} isAuthenticated={!!token} />
          <PrivateRoute exact path="/articles/:slug/edit" component={EditArticlePage} isAuthenticated={!!token} />
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
  )
}

export default App
