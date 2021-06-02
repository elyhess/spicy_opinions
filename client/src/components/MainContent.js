import React, {useState, useEffect} from "react";
import HotTakeList from "./HotTakeList"
import InputHotTake from "./InputHotTake";
import ProfilePage from "./ProfilePage.js";
import { Route } from "react-router-dom";
import ProtectedRoute from "../services/ProtectedRoute";
import Login from "./Login";
import NavComponent from "./Nav";
import authHeader from '../services/DataService'
import AuthService from "../services/AuthService"

function Content () {
  const user = AuthService.getCurrentUser()
  const [ hotTakes, setHotTakes ] = useState([]);
  const [ showLogin, setShowLogin ] = useState(false)

  function openLogin() {
    setShowLogin(prev => !prev);// toggles back and forth true/false
  }

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
    getHotTakes();
    if (window.location.pathname !== "/about" && !user) {
      openLogin();
    }
  }, []); // on page load

  return (
      <main>
          <Route path="/">
            <NavComponent openModal={openLogin}/>
            <Login showLogin={showLogin} setShowLogin={setShowLogin}/>
          </Route>

          <div className="main-view">
            <Route exact path="/about">
            </Route>

            <Route exact path="/login">
            </Route>

            <ProtectedRoute exact path="/profile" user={user} component={ProfilePage} />
            <ProtectedRoute exact path="/spicies" user={user} component={InputHotTake} getHotTakes={getHotTakes} />
            <ProtectedRoute exact path="/spicies" user={user} component={HotTakeList} hotTakes={hotTakes} />

          </div>
      </main>
  )
}

export default Content;