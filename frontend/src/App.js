import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

//Components
import Header from "./components/Header";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

//Screens
import HomeScreen from "./screens/HomeScreen";
import PostsScreen from "./screens/PostsScreen";
import AppScreen from "./screens/AppScreen";
import CourseScreen from "./screens/CourseScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="py-3">
          <Container fluid={true} className="container-fluid">
            <Route path="/" component={HomeScreen} exact />
            <Route path="/posts/:id" component={PostsScreen} />
            <Route path="/app" component={AppScreen} exact />
            <Route path="/course" component={CourseScreen} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={Register} exact />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </Container>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
