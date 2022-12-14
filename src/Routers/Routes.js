import Login from "../Components/SharedComponents/Login/Login";
import Register from "../Components/SharedComponents/Register/Register";
import Main from "../Layout/Main";
import AddService from "../Page/AddService/AddService";
import Blog from "../Page/Blog/Blog";
import Home from "../Page/Home/Home";
import MyReviews from "../Page/MyReviews/MyReviews";
import UpdateReview from "../Page/MyReviews/UpdateReview";
import Service from "../Page/Services/Service";
import ServiceDetails from "../Page/Services/ServiceDetails";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services',
                element: <Service></Service>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
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
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/updateReview/:id',
                element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/reviews/${params.id}`)
            }
        ]
    }
])

export default routes;