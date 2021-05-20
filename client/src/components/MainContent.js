import React, {useState, useEffect} from "react";
import HotTakeList from "./HotTakeList"
import InputHotTake from "./InputHotTake";
import { Route } from "react-router-dom";
import Login from "./Login";
import NavComponent from "./Nav";


function Content () {
  const [ hotTakes, setHotTakes ] = useState([]);
  const [ showLogin, setShowLogin ] = useState(false)

  function openLogin() {
    setShowLogin(prev => !prev);// toggles back and forth true/false
  }

  async function getHotTakes() {
    const response = await fetch("http://localhost:4000/api/v1/articles")
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
          {/*Root path*/}
          <Route path="/">
            <NavComponent openModal={openLogin}/>
            <Login showLogin={showLogin} setShowLogin={setShowLogin}/>
          </Route>

          <div className="main-view">
            {/*About page  */}
            <Route path="/about">

            </Route>
            {/*Profile Page*/}
            <Route path="/profile">
              {/*<button onClick={openModal}>Click Me</button>*/}
            </Route>
            {/*Spicies Page  */}
            <Route path="/spicies">
              <InputHotTake
                  getHotTakes={getHotTakes}
              />
              <HotTakeList
                  hotTakes={hotTakes}
              />
            </Route>
          </div>
      </main>
  )
}

export default Content;