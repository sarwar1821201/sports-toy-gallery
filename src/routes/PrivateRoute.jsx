import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

   const {user,loading} = useContext(AuthContext)
   
   if(user){
      return children;
   }

   if(loading){
      return <span className="loading loading-spinner text-success"></span>

   }
  
    return <Navigate to='/login'  replace >  </Navigate>  ;
};

export default PrivateRoute;