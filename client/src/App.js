import './App.css';
import { Route, Redirect, Switch } from "react-router-dom";
import NavComponent from "./components/Nav";
import Login from "./components/Auth/Login";
import AuthService from "./services/AuthService";
import ProtectedRoute from "./services/ProtectedRoute";
import ProfilePage from "./components/ProfilePage";
import SpiciesPage from "./components/SpiciesPage";
import NotFoundPage from "./components/Errors/NotFound";
import Logout from "./components/Auth/Logout"
import Register from "./components/Auth/Register"
import AboutPage from "./components/AboutPage";
import HotTake from "./components/HotTakeComments/HotTake"

function App() {
  const user = AuthService.getCurrentUser()

  return (
      <>
        <NavComponent />

        <Switch>
          <Route exact path="/" />

          <Route exact path="/about" component={AboutPage}/>

          <Route exact path="/login" render={()=>(
              user ? (alert("You are already logged in!"), (<Redirect to="/profile"/>)) : (<Login />)
          )} />

          <Route exact path="/register" render={()=>(
              user ? (alert("You are already logged in!"), (<Redirect to="/profile"/>)) : (<Register />)
          )} />

          <Route exact path="/logout" render={()=>(
              !user ? (alert("You can't sign out if you aren't logged in."), (<Redirect to="/about"/>)) : (<Logout />)
          )} />


          <ProtectedRoute exact path="/profile"
                          component={()=> <ProfilePage user={user}/>}
                          user={user}
          />

          <ProtectedRoute exact path="/spicies"
                          component={()=> <SpiciesPage user={user}/>}
                          user={user}
          />

          <ProtectedRoute exact path="/spicies/:id"
                          component={()=> <HotTake user={user}/>}
                          user={user}
          />

          <Route component={NotFoundPage} />
        </Switch>
      </>

  );
}

export default App;
