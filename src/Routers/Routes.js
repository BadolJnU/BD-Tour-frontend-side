import Login from "../Components/SharedComponents/Login/Login";
import Register from "../Components/SharedComponents/Register/Register";
import Main from "../Layout/Main";
import AddService from "../Page/AddService/AddService";
import Home from "../Page/Home/Home";
import Service from "../Page/Services/Service";
import ServiceDetails from "../Page/Services/ServiceDetails";

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
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default routes;