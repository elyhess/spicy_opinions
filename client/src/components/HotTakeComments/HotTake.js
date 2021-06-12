import React, {useState, useEffect} from 'react';
import HotTakeCommentList from "./HotTakeCommentList"
import InputComment from "./InputComment"
import { useParams } from "react-router-dom";
function HotTake(props) {
  const [ hotTake, setHotTake ] = useState(null)
  const { id } = useParams();

  async function getHotTake() {
    const response = await fetch(`http://localhost:4000/api/v1/articles/${id}`, {
      method: "GET"
    })
    const hotTake = await response.json();
    setHotTake(hotTake)
  }

  useEffect(() => {
    getHotTake();
  }, []); // on page load


  return (
      <>
        <HotTakeCommentList hotTake={hotTake}/>
        <InputComment />
      </>
  );
}

export default HotTake;