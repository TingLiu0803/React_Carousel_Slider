import "./App.css";
import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";

// add lazy to speed up the loading
const Carousel = lazy(() => import('./Carousel/index'));

const App = () => {

  return (
// use react router dom, so it will be easier for adding other routes
    <Router>
      <Switch>
        <Route path="/development-test">
        <Suspense fallback = {<div>Loading...</div>}>
          <Carousel />
        </Suspense>
        </Route>
        <Redirect from="/" to="/development-test" />
      </Switch>
    </Router>
  );
};

export default App;
