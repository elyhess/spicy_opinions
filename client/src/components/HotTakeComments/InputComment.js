import React, {Fragment, useState} from 'react';


function InputComment(props) {
  const [bodyInput, setBodyInput] = useState("")
  const [submitted, setSubmitted] = useState(false)

  async function onSubmitForm(e) {
    e.preventDefault();
    try {
      const articleId = props.hotTake.id
      console.log(props)
      const author = props.user.email
      const body = bodyInput
      const request = {body, articleId, author}
      const response = await fetch("http://localhost:4000/api/v1/comments", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(request)
      });
      props.getHotTake();
      if (response.status !== 404 ) {
        setBodyInput("")
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
      <Fragment>
        <div className="main-view">
          <div className="w-full max-w-screen border border-gray-600 rounded-2xl py-3 px-5 mb-5 shadow-lg">
            <div className="flex flex-wrap space-x-1">
              <div className="text-2xl font-bold">
                Comments
              </div>
            </div>
              <div className="pt-4">
                <form onSubmit={onSubmitForm}>
                <div className="flex justify-between">
                  <input type="text"
                         placeholder="I disagree.. And here is why.."
                         className="w-11/12 h-14 px-3 py-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
                         value={bodyInput}
                         onChange={e => setBodyInput(e.target.value)}
                  />
                  <button className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg">
                    <img
                        className="h-8 w-7 mr-1"
                        src={window.location.origin + '/pepper.png'}
                        alt="Workflow"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
  )
}

export default InputComment