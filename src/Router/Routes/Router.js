import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Services from "../../Pages/Services/Services";
import Error from "../../Share/Error/Error";

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
        path: '/services/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
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