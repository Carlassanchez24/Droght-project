import Layout1 from "../layout/Layout1";
import Layout2 from "../layout/Layout2";
import Home from "../pages/Home"
import Tracker1 from "../pages/Tracker1";
import Tracker2 from "../pages/Tracker2";
import Tracker3 from "../pages/Tracker3";
import Tracker4 from "../pages/Tracker4";
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
                path:"/page",
                element: <Tracker1 />
            },
            {
                path:"/page/2",
                element: <Tracker2 />
            },
            {
                path:"/page/3",
                element: <Tracker3 />
            },
            {
                path:"/page/4",
                element: <Tracker4 />
            }
        ]
    }
])

export default router;
