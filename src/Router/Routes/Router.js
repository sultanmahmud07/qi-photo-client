import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import HomeServices from "../../Pages/homeServices/HomeServices";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Review from "../../Pages/Review/Review";
import Services from "../../Pages/Services/Services";
import Error from "../../Share/Error/Error";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router =createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services',
        element: <Services></Services>
        
      },
      {
        path: '/homeservices',
        element: <HomeServices></HomeServices>
        
      },
      {
        path: '/blog',
        element: <Blog></Blog>
        
      },
      {
        path: '/addservice',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
        
      },
      {
        path: '/review',
        element: <PrivateRoute><Review></Review></PrivateRoute>
        
      },
      {
        path: '/services/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`https://assignment-server-iota.vercel.app/services/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`https://assignment-server-iota.vercel.app/services/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  }
]);

export default router;