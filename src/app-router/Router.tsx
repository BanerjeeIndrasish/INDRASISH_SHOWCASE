import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Error from "../components/Error";
import AppLayout from "../app-layout/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { path: '/home', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/projects', element: <Projects /> }
        ],
        errorElement: <Error />
    },
])

const AppRouter = () => <RouterProvider router={router} />;
export default AppRouter