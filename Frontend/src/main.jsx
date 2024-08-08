import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import "./index.css";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import CoursePage from "./Pages/CoursePage.jsx";
const router = createBrowserRouter([
{
    path: '/',
    element: <App/>,
    children: [
        {
            path: '',
            element: <Home />
        },
        {
            path: 'courses',
            element: <CoursePage />
        }
    ]
}
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
