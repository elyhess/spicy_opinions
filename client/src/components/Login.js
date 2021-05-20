import React, {Fragment} from "react";
import {useSpring, animated} from "react-spring";

function Login(props) {
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: props.showLogin ? 1 : 0,
    transform: props.showLogin ? `translateY(0%)` : `translateY(-100%)`
  })

  return (
    <Fragment>
      {props.showLogin ? (
        <animated.div style={animation}>
          <div className="main-view">
            <div className="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
              <div className="mb-4">
                <div className="flex justify-end">
                  <svg xmlns="http://www.w3.org/2000/svg"
                       className="h-6 w-6 hover:text-red-600"
                       fill="none"
                       onClick={() => props.setShowLogin(prev => !prev)} // closes model on click
                       viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </div>

                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                  Email
                </label>

                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username"
                       type="text"
                       placeholder="Username"
                />
              </div>
              <div className="mb-6">
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                       id="password"
                       type="password"
                       placeholder="******************"
                />
                  <p className="text-red text-xs italic">Please choose a password.</p>
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-black hover:text-red-500 hover:bg-white text-white font-bold py-2 px-4 rounded" type="button">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </animated.div>
      ) : null}
    </Fragment>
  )
}

export default Login;