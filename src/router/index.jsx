import Layout1 from "../layout/Layout1";
import Layout2 from "../layout/Layout2";
import About from "../pages/About";
import Home from "../pages/Home"
import Login from "../pages/Login";
import Tracker1 from "../pages/Tracker1";
import Tracker2 from "../pages/Tracker2";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter ([
    {
        path:"/",
        element: <Layout1 />,
        children:[
            {
                path:"/",
                element: <Home />
            }
        ]
    },
    {
        path:"/page",
        element: <Layout2 />,
        children:[
            {
                path:"/page/about",
                element: <About />
            },
            {
                path:"/page",
                element: <Tracker1 />
            },
            {
                path:"/page/2",
                element: <Tracker2 />
            },
            {
                path:"/page/login",
                element: <Login />
            },
           
        ]
    }
])

export default router;
