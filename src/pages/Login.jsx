import React, { useEffect,useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthUser } from '../utils/AuthContext'


const Login = () => {

  const {user,loginUser} = AuthUser();
  const nav = useNavigate();
  useEffect(() => {
    if(user){
     nav('/');
    }
  },[]);


  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    const userInfo = {email,password};
    console.log(userInfo);
    loginUser(userInfo);
  }

  return (
    <div className="container">
        <div className="login-register-container">
          <form onSubmit={handleSubmit}>
            <div className="form-field-wrapper">
                <label>Email:</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  placeholder="Enter email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
            </div>

            <div className="form-field-wrapper">
                <label>Password:</label>
                <input 
                  type="password" 
                  name="password"
                  placeholder="Enter password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
            </div>


            <div className="form-field-wrapper">
    
                <input 
                  type="submit" 
                  value="Login"
                  className="btn"
                  />
            </div>

          </form>

          <p>Don't have an account? <Link to="/register">Register</Link></p>

        </div>
    </div>
  )
}

export default Login
