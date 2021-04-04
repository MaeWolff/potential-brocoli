import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import pages
import HomePage from "./pages/HomePage";
import EnterPage from "./pages/EnterPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/enter" component={EnterPage} />
      </Switch>
    </Router>
  );
}

export default App;
