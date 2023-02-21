import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import Persons from './pages/Persons'
import "./assets/styles/responsive.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route path="/nazorat" exact component={SignUp} />
          <Route exact path="/bosh-sahifa" component={Home} />
          <Route exact path="/ishlar" component={Tables} />
          <Route exact path="/turlar" component={Billing} />
          <Route exact path="/odamlar" component={Persons} />
          <Route exact path="/profile" component={Profile} />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
