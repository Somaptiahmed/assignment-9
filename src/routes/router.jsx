

// import { createBrowserRouter } from "react-router-dom";
// import Home from "../layouts/Home";
// import AuthLayout from "../layouts/AuthLayout";
// import Login from "../Pages/Login";
// import Register from "../Pages/Register";
// import Layout from "../components/Layout";
// import PrivateRoute from "./PrivateRoute";
// import Expert from "../Pages/Expert";
// import EcoDetails from "../Pages/EcoDetails"; // Import EcoDetails
// import ErrorPage from "../Pages/ErrorPage"; // Import ErrorPage
// import MyProfile from "../layouts/MyProfile";
// import UpdateProfile from "../layouts/UpadateProfile";
// import ForgotPassword from "../Pages/ForgotPassword";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />, // Main Home layout/component
//   },
//   {
//     path: "/eco/:id", // EcoDetails with dynamic ID parameter
//     element: (
//       <PrivateRoute>
//         <EcoDetails />
//       </PrivateRoute>
//     ), // Route protected by PrivateRoute
//   },
//   {
//     path: "auth",
//     element: <AuthLayout />, // Authentication layout
//     children: [
//       {
//         path: "login", // No need to repeat /auth
//         element: <Login />,
//       },
//       {
//         path: "register",
//         element: <Register />,
//       },
//       {
//         path: "expert", // Expert route inside /auth
//         element: <Expert />,
//       },
//     ],
//   },
//   {
//     path: "*", // Catch-all for undefined routes
//     element: <ErrorPage />, // Show ErrorPage for undefined routes
//   },
//   {
//     path: "profile", 
//     element: <MyProfile></MyProfile>, 
//   },
//   {
//     path: "update", 
//     element: <UpdateProfile></UpdateProfile>
//   },
//   {
//     path: "forgot-password", 
//     element: <ForgotPassword></ForgotPassword>
//   }
// ]);

// export default router;


import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Layout from "../components/Layout";
import PrivateRoute from "./PrivateRoute";
import Expert from "../Pages/Expert";
import EcoDetails from "../Pages/EcoDetails"; // Import EcoDetails
import ErrorPage from "../Pages/ErrorPage"; // Import ErrorPage
import MyProfile from "../layouts/MyProfile";
import UpdateProfile from "../layouts/UpadateProfile";
import ForgotPassword from "../Pages/ForgotPassword";
import Facebook from "../Pages/Facebook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Main Home layout/component
  },
  {
    path: "/eco/:id", // EcoDetails with dynamic ID parameter
    element: (
      <PrivateRoute>
        <EcoDetails />
      </PrivateRoute>
    ), // Route protected by PrivateRoute
  },
  {
    path: "auth",
    element: <AuthLayout />, // Authentication layout
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "facebook",
        element: <Facebook></Facebook>,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />, // Added ForgotPassword route under auth
      },
      {
        path: "expert",
        element: <Expert />,
      },
      
    ],
  },
  {
    path: "*", // Catch-all for undefined routes
    element: <ErrorPage />, // Show ErrorPage for undefined routes
  },
  {
    path: "profile",
    element: <MyProfile />,
  },
  {
    path: "update",
    element: <UpdateProfile />,
  },
  
]);

export default router;



