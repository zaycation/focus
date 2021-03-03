import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Header from "./components/Header";

//Screens
import HomeScreen from "./screens/HomeScreen";
import PostsScreen from "./screens/PostsScreen";
import AppScreen from "./screens/AppScreen";
import CourseScreen from "./screens/CourseScreen";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container fluid={true} className="container-fluid">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/posts/:id" component={PostsScreen} />
          <Route path="/app" component={AppScreen} exact />
          <Route path="/course" component={CourseScreen} exact />
        </Container>
      </main>
    </Router>
  );
};

export default App;
