import React, { Fragment } from "react";
import moment from "moment";
import { useHistory } from 'react-router-dom';

function HotTakeList (props) {
  const history = useHistory();

  return (
  <Fragment>
    {
      props.hotTakes.map((hotTake, i) => (
      <div className="main-view" key={i}>
        <div className="w-full max-w-screen border border-gray-600 rounded-2xl py-3 px-5 mb-5 shadow-lg">
          <div className="flex">
            <div>
              <div className="flex flex-wrap space-x-1">
                <div className="text-2xl font-bold">{hotTake.title}</div>
              </div>
            </div>
            <div className="ml-auto">
                <img
                    className="h-5 w-5 ml-2 mr-2"
                    src="pepper.png"
                    alt="Workflow"
                />
            </div>
          </div>
          <div className="py-3">
            <p className="text-lg">{hotTake.body}</p>
            <div className="flex justify-between">
              <p className="text-gray-500 pt-1">{moment(hotTake.createdAt).fromNow()}</p>
              <p className="text-gray-500 pt-1">{hotTake.author}</p>
            </div>
          </div>

          <div className="flex space-x-5 pt-3 text-gray-500 border-t border-gray-300">
            <div className="flex space-x-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-red-500" >
                <g>
                  <path
                      d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z">
                  </path>
                </g>
              </svg>
              <span>783.9k</span></div>
            <div className="flex space-x-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hover:text-blue-500" onClick={()=> history.push(`/spicies/${hotTake.id}`)}>
                <g>
                  <path
                      d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z">
                  </path>
                </g>
              </svg>
              <span>{hotTake.commentCount}</span></div>
          </div>
        </div>
      </div>
      ))
    }
  </Fragment>
  )
}

export default HotTakeList;