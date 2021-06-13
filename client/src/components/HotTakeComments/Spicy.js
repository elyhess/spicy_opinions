import React, {useState, useEffect} from 'react';
import moment from "moment";


function Spicy(props) {

  return (
      <>
        {props.hotTake ? (
            <div className="main-view pt-8">
              <div className="w-full max-w-screen border border-gray-600 rounded-2xl py-3 px-5 mb-5 shadow-lg">
                <div className="flex">
                  <div>
                    <div className="flex flex-wrap space-x-1">
                      <div className="text-2xl font-bold">{props.hotTake.title}</div>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <img
                        className="h-5 w-5 ml-2 mr-2"
                        src={window.location.origin + '/pepper.png'}
                        alt="Workflow"
                    />
                  </div>
                </div>
                <div className="py-3">
                  <p className="text-lg">{props.hotTake.body}</p>
                  <div className="flex justify-between">
                    <p className="text-gray-500 pt-1">{moment(props.hotTake.createdAt).fromNow()}</p>
                    <p className="text-gray-500 pt-1">{props.hotTake.author}</p>
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
                </div>
              </div>
            </div>
        ) : null }
      </>
  );
}

export default Spicy;