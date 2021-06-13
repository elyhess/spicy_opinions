import React, {useState, useEffect} from 'react';
import SpicyCommentList from "./HotTakeComments/SpicyCommentList"
import NotFound from "./Errors/NotFound"
import LoadingSpinner from "./Errors/LoadingSpinner";
import Spicy from "./HotTakeComments/Spicy"
import InputComment from "./HotTakeComments/InputComment"
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
                      <Spicy hotTake={hotTake} />
                      <InputComment getHotTake={getHotTake} hotTake={hotTake} user={props.user}/>
                      <SpicyCommentList hotTake={hotTake}/>
                    </>
                  )
                  :
                  (
                      <NotFound/>
                  )
              }
            </>
        ) }
      </>
  );
}

export default HotTake;