import {createBrowserRouter} from "react-router-dom"
import Main from "../layout/Main/Main"
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <HomeLayout/>
            },
            {
                path: "/blog",
                element: <Blogs/>
            }
        ]
    }
]);

export default routes;