import './App.css';
import { Route, Redirect, Switch } from "react-router-dom";
import NavComponent from "./components/Nav";
import Login from "./components/Login";
import AuthService from "./services/AuthService";
import ProtectedRoute from "./services/ProtectedRoute";
import ProfilePage from "./components/ProfilePage";
import SpiciesPage from "./components/SpiciesPage";
import NotFoundPage from "./components/NotFound";
import Logout from "./components/Logout"

function App() {
  const user = AuthService.getCurrentUser()

  return (
      <>
        <NavComponent />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/about" />
          <Route exact path="/login" render={()=>(
              user ? (alert("You are already logged in!"), (<Redirect to="/profile"/>)) : (<Login />)
          )} />
          <Route exact path="/logout" render={()=>(
              !user ? (alert("You can't sign out if you aren't logged in."), (<Redirect to="/about"/>)) : (<Logout />)
          )} />
          <ProtectedRoute exact path="/profile" user={user} component={ProfilePage} />
          <ProtectedRoute exact path="/spicies" user={user} component={SpiciesPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </>

  );
}

export default App;
