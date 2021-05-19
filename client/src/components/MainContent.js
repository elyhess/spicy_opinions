import React, {useState, useEffect} from "react";
import HotTakeList from "./HotTakeList"
import InputHotTake from "./InputHotTake";


function Content () {
  const [ hotTakes, setHotTakes ] = useState([]);

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
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <InputHotTake
                getHotTakes={getHotTakes}
            />
            <HotTakeList
                hotTakes={hotTakes}
            />
          </div>
        </div>
      </main>
  )
}

export default Content;