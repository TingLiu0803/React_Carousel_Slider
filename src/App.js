import "./App.css";
import Carousel from "./Carousel/index";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/development-test">
          <Carousel />
        </Route>
        <Redirect from="/" to="/development-test" />
      </Switch>
    </Router>
  );
};

export default App;
