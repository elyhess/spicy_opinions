import React, {Fragment, useState} from "react";

function InputHotTake(props) {
  const [titleInput, setTitleInput] = useState("")
  const [bodyInput, setBodyInput] = useState("")

  async function onSubmitForm(e) {
    e.preventDefault();
    try {
      const userId = "18"
      const body = bodyInput
      const title = titleInput
      const request = {body, title, userId}
      const response = await fetch("http://localhost:4000/api/v1/articles/new", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(request)
      });
      props.getHotTakes();
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
  <Fragment>
    <div className="w-full max-w-screen border border-gray-600 rounded-2xl py-3 px-5 mb-5 shadow-lg">
      <div className="flex flex-wrap space-x-1">
        <div className="text-2xl font-bold">
          What's on your mind???
        </div>
      </div>

      <form className="d-flex" onSubmit={onSubmitForm}>
        <input type="text"
               placeholder="title"
               className="input"
               value={titleInput}
               onChange={e => setTitleInput(e.target.value)}
        />
        <input type="textarea"
               placeholder="body"
               className="input"
               value={bodyInput}
               onChange={e => setBodyInput(e.target.value)}
        />
        <button className="btn btn-primary">
          Post!
        </button>
      </form>
    </div>

  </Fragment>
  )
}

export default InputHotTake