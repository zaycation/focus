import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Screens
import HomeScreen from "./screens/HomeScreen";
import PostsScreen from "./screens/PostsScreen";
import AppScreen from "./screens/AppScreen";

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
          <Route path="/budgeter" component={AppScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
