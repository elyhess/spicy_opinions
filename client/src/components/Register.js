import React, {Fragment, useState, useEffect} from 'react';
import {useSpring, animated} from "react-spring";
import AuthService from "../services/AuthService"


function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [ showRegister, setShowRegister ] = useState(false)

  function openRegister() {
    setShowRegister(prev => !prev); // toggles back and forth true/false
  }

  useEffect(() => {
    openRegister();
  }, []); // on page load

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showRegister ? 1 : 0,
    transform: showRegister ? `translateY(0%)` : `translateY(-100%)`
  })

  async function onSubmitRegister(e) {
    e.preventDefault();
    const register = await AuthService.register(email, password)
    setMessage(register.message);
    const user = AuthService.getCurrentUser()
    console.log(user)
    if (user) {
      window.location = "/profile"
    }

  }

  return (
      <Fragment>
        {showRegister ? (
            <animated.div style={animation}>
              <div className="main-view pt-8">
                <div className="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                  {message ? (
                      <div className="text-xl text-center">{message}</div>
                  ) : null}
                  <form onSubmit={onSubmitRegister}>
                    <div className="mb-4">
                      <div className="flex justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-6 w-6 hover:text-red-600"
                             fill="none"
                             onClick={() => window.location.href='/about'} // closes model on click
                             viewBox="0 0 24 24"
                             stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                      </div>

                      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">Email</label>
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username"
                             value={email}
                             onChange={e => setEmail(e.target.value)}
                             placeholder="Email"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">Password</label>
                      <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                             value={password}
                             onChange={e => setPassword(e.target.value)}
                             placeholder="******************"
                      />
                    </div>
                    <button className="bg-black hover:text-red-500 hover:bg-white text-white font-bold py-2 px-4 rounded">
                      Register
                    </button>
                  </form>

                </div>
              </div>
            </animated.div>
        ) : null}
      </Fragment>
  )
}

export default Register;