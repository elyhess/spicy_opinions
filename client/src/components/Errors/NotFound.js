import React from 'react';
import { Link } from 'react-router-dom';
import '../../notFound.scss';

const NotFound = () => {
  return (
      <div className='pt-12'>
        <div className="gandalf">
          <div className="fireball"></div>
          <div className="skirt"></div>
          <div className="sleeves"></div>
          <div className="shoulders">
            <div className="hand left"></div>
            <div className="hand right"></div>
          </div>
          <div className="head">
            <div className="hair"></div>
            <div className="beard"></div>
          </div>
        </div>
        <div className="mt-12 text-2xl text-center">
          <div className="font-bold pb-5 pt-5">404 - You Shall Not Pass</div>
          <p>Uh oh, Gandalf is blocking the way!<br />Maybe you have a typo in the url? Or you meant to go to a different location?</p>
        </div>
        <p className="pt-12 text-center text-2xl text-red-500 hover:text-black rounded-md text-base font-semibold"><Link to='/'>Back to Home</Link></p>
      </div>
  )
}

export default NotFound;