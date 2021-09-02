import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import CreatePost from "./components/create-post/CreatePost";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create-post" component={CreatePost} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
