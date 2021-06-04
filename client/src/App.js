import './App.css';
import React, {useEffect, useState} from "react";
import { Route } from "react-router-dom";
import NavComponent from "./components/Nav";
import Login from "./components/Login";
import AuthService from "./services/AuthService";
import ProtectedRoute from "./services/ProtectedRoute";
import ProfilePage from "./components/ProfilePage";
import InputHotTake from "./components/InputHotTake";
import HotTakeList from "./components/HotTakeList";
import authHeader from "./services/DataService";

function App() {
  const user = AuthService.getCurrentUser()
  const [ hotTakes, setHotTakes ] = useState([]);

  async function getHotTakes() {
    if (user) {
      const response = await fetch("http://localhost:4000/api/v1/articles", {
        method: "GET",
        headers: authHeader()
      })
      const hotTakesArray = await response.json();
      setHotTakes(hotTakesArray)
    }
  }

  useEffect(() => {
  }, [hotTakes]); // any time hottakes is changed re-render

  useEffect(() => {
    if (user) {
      getHotTakes();
    }
  }, []); // on page load

  return (
      <>
        <NavComponent openModal={Login}/>
        <Route exact path="/about" />
        <Route exact path="/" />
        <Route exact path="/login" component={Login} user={user}/>
        <ProtectedRoute exact path="/profile" user={user} component={ProfilePage} />
        <ProtectedRoute exact path="/spicies" user={user} component={InputHotTake} getHotTakes={getHotTakes} />
        <ProtectedRoute exact path="/spicies" user={user} component={HotTakeList} hotTakes={hotTakes} />
      </>

  );
}

export default App;
