import React, {useState, useEffect} from "react";
import HotTakeList from "./HotTakeList"
import InputHotTake from "./InputHotTake";
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
    const response = await fetch("http://localhost:4000/api/v1/articles", {
      method: "GET",
      headers: authHeader()
    })
    const hotTakesArray = await response.json();
    setHotTakes(hotTakesArray)
  }

  useEffect(() => {
  }, [hotTakes]); // any time hottakes is changed re-render

  useEffect(() => {
    getHotTakes();
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

            <ProtectedRoute exact path="/profile">
              <HotTakeList hotTakes={hotTakes}/>
            </ProtectedRoute>

            <ProtectedRoute exact path="/spicies" user={user}>
              <InputHotTake getHotTakes={getHotTakes}/>
              <HotTakeList hotTakes={hotTakes}/>
            </ProtectedRoute>

          </div>
      </main>
  )
}

export default Content;