import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import AuthService from "../services/AuthService"

function Nav() {
  const user = AuthService.getCurrentUser();
  const [isOpen, setIsOpen] = useState(false);

  function logOut() {
    AuthService.logout()
    window.location = "/spicies"
  }

  return (
      <div>
        <nav className="bg-gray-600">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                      className="h-8 w-8"
                      src="pepper.png"
                      alt="Workflow"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {user ? (
                    <>
                      <div className="inactive-link">
                        <NavLink to="/profile" activeClassName="active-link">Profile</NavLink>
                      </div>
                      <div className="inactive-link">
                        <NavLink to="/spicies" activeClassName="active-link">Spicies</NavLink>
                      </div>
                      <div className="inactive-link">
                        <NavLink to="/about" activeClassName="active-link">About</NavLink>
                      </div>
                    </>
                    ) : (
                      <div className="inactive-link">
                        <NavLink to="/about" activeClassName="active-link">About</NavLink>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {user ? (
                      <div className="inactive-link">
                        <NavLink to="/logout" activeClassName="active-link" onClick={logOut}>Log Out</NavLink>
                      </div>
                    ) : (
                      <>
                        <div className="inactive-link">
                          <NavLink to="/login" activeClassName="active-link" >Log In</NavLink>
                        </div>
                        <div className="inactive-link">
                          <NavLink to="/register" activeClassName="active-link" >Register</NavLink>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="md:hidden">
                  <button
                      onClick={() => setIsOpen(!isOpen)}
                      type="button"
                      className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      aria-controls="mobile-menu"
                      aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                    ) : (
                        <svg
                            className="block h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                    )}
                  </button>

                </div>
              </div>
            </div>
          </div>

          <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                  <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <div className="inactive-link block">
                      <NavLink to="/profile" activeClassName="active-link block">Profile</NavLink>
                    </div>
                    <div className="inactive-link block">
                      <NavLink to="/spicies" activeClassName="active-link block">Spicies</NavLink>
                    </div>
                    <div className="inactive-link block">
                      <NavLink to="/about" activeClassName="active-link block">About</NavLink>
                    </div>
                  </div>
                </div>
            )}
          </Transition>
        </nav>
      </div>
  );
}

export default Nav;