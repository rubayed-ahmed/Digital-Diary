import {createBrowserRouter} from "react-router-dom"
import Main from "../layout/Main/Main"
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import HomeLayout from "../Pages/HomeLayout/HomeLayout";
import BlogDetails from "../Pages/Blogs/BlogDetails";

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
            },
            {
                path: "/blogs/:id",
                element: <BlogDetails/>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            }
        ]
    }
]);

export default routes;