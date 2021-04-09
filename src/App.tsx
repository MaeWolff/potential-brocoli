import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import pages
import HomePage from "./pages/HomePage";
import EnterPage from "./pages/EnterPage";

import Dashboard from "./pages/dashboard/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/enter" component={EnterPage} />

        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
