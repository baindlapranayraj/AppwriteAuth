import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthUser } from '../utils/AuthContext'

const Header = () => {
  const {user,logOut} =AuthUser();


  return (
    <div className="header">
        <div>
            <Link id="header-logo" to="/">LOGO</Link>
        </div>

        <div className="links--wrapper">
            {user?(
               <>
                <Link to="/" className="header--link">Home</Link>
                <Link to="/profile" className="header--link">Profile</Link>

                <button onClick={logOut} className="btn">Logout</button>
              </>             
            ):(
                <Link className="btn" to="/login">Login</Link>
            )}

        </div>
    </div>
  )
}

export default Header
