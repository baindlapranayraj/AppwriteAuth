import React from 'react'
import {Outlet,Navigate} from "react-router-dom"
import { AuthUser } from './AuthContext';

function PrivateRoutes() {
    const {user} = AuthUser();

  return user? <Outlet/>:<Navigate to={'/login'}/>
}

export default PrivateRoutes;