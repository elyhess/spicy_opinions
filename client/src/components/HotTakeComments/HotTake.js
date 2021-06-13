import React, {useState, useEffect} from 'react';
import HotTakeCommentList from "./HotTakeCommentList"
import InputComment from "./InputComment"
import NotFound from "../Errors/NotFound"
import LoadingSpinner from "../Errors/LoadingSpinner";
import { useParams } from "react-router-dom";

function HotTake(props) {
  const [ hotTake, setHotTake ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const { id } = useParams();

  function getHotTake() {
    fetch(`http://localhost:4000/api/v1/articles/${id}`, {
      method: "GET"
    }).then (data => data.json())
      .then (data => {
        if (data.id) {
          setHotTake(data)
        }
        setLoading(false);
    }).catch((error) => {
      console.error(error)
    })
  }

  useEffect(() => {
    getHotTake();
  }, []); // on page load


  return (
      <>
      {loading ? (
          <LoadingSpinner/>
      ) : (
        <>
          {hotTake ?
              (
                <>
                  <HotTakeCommentList hotTake={hotTake}/>
                  <InputComment />
                </>
              )
              :
              (
                <>
                  <NotFound/>
                </>
              )
          }
        </>
      ) }
      </>
  );
}

export default HotTake;