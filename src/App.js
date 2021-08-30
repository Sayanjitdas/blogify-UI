import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <div>Home</div>} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
