// import React, { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import useAdmin from '../../Hooks/useAdmin';
// import Loading from '../../pages/Shareds/Loading/Loading';
// import { AuthContext } from '../context/AuthProvider';

// const AdminRoute = ({ children }) => {
//     const{user,loading}=useContext(AuthContext);
//     const[isAdmin,isAdminLoading]=useAdmin(user?.email)
//     const location=useLocation();

//     if(loading || isAdminLoading){
//         return <Loading></Loading>
//     }

//     if(user && isAdmin){
//         return children;
//     }
//     return <Navigate to="/login" state={{ from: location }} replace />;
// };

// export default AdminRoute;