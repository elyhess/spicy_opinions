import React, {Fragment, useState} from "react";
import Confetti from 'react-dom-confetti';

function InputHotTake(props) {
  const [titleInput, setTitleInput] = useState("")
  const [bodyInput, setBodyInput] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const config = {
    angle: "274",
    spread: "360",
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: "6900",
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "623px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  async function onSubmitForm(e) {
    setSubmitted(prev => !prev);
    e.preventDefault();
    try {
      const userId = "1"
      const body = bodyInput
      const title = titleInput
      const request = {body, title, userId}
      const response = await fetch("http://localhost:4000/api/v1/articles/new", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(request)
      });
      props.getHotTakes();
      const newSpicy = await response.json();
      console.log(newSpicy)
      setSubmitted(prev => !prev);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
  <Fragment>
    <div className="w-full max-w-screen border border-gray-600 rounded-2xl py-3 px-5 mb-5 shadow-lg">
      <div className="flex flex-wrap space-x-1">
        <div className="text-2xl font-bold">
          What's on your mind?
        </div>
      </div>
      <div className="pt-4">
        <form onSubmit={onSubmitForm}>
          <input type="text"
                 placeholder="Your Spicy Opinion Here."
                 className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                 value={titleInput}
                 onChange={e => setTitleInput(e.target.value)}
          />
          <div className="flex justify-between">
          <textarea
              placeholder="Explain yourself!"
              className="w-11/12 h-20 px-3 py-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
              value={bodyInput}
              onChange={e => setBodyInput(e.target.value)}
          />
            <button className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg">
            <Confetti active={submitted} config={config}/>
              <img
                  className="h-8 w-7 mr-1"
                  src="pepper.png"
                  alt="Workflow"
              />
            </button>
          </div>
        </form>
      </div>
    </div>

  </Fragment>
  )
}

export default InputHotTake