import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import Service from "../Page/Services/Service";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Service></Service>
            }
        ]
    }
])

export default routes;