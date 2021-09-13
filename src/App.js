import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Details from "./components/detail/Details";
import CreatePost from "./components/create-post/CreatePost";
import Profile from "./components/profile/Profile";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './App.css'


function App() {

  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id">
        {isAuthenticated ? <Details /> : <Redirect exact to="/login" />}
        </Route>
        <Route exact path="/create-post">
        {isAuthenticated ? <CreatePost /> : <Redirect exact to="/login" />}
        </Route>
        <Route exact path="/profile">
        {isAuthenticated ? <Profile /> : <Redirect exact to="/login" />}
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
