import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HomeScreen from "./components/Screens/HomeScreen";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./_app.scss";
import LoginScreen from "./components/Screens/loginScreen/loginScreen";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} />
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  );
};
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path="/auth">
          <LoginScreen />
        </Route>
        <Route path="/Screen">
          <Layout>
            <h1> Show Screen</h1>
          </Layout>
        </Route>
        <Route>
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
