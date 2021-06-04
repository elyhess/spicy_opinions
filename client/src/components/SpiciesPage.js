import React, {useEffect, useState} from "react";
import InputHotTake from "./HotTakes/InputHotTake";
import HotTakeList from "./HotTakes/HotTakeList";
import authHeader from "../services/DataService";

function SpiciesPage() {
  const [ hotTakes, setHotTakes ] = useState([]);

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
    <>
      <InputHotTake getHotTakes={getHotTakes} />
      <HotTakeList hotTakes={hotTakes} />
    </>
  )
}

export default SpiciesPage;