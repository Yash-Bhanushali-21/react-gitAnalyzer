import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/*
        path:the url.
        exact: exactly the url must match.
        */}

          <Route path="/" exact={true}>
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/*
        path:* refers that it will always match
        */}
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
