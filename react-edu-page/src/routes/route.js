import Dashboard from "../pages/Admin/Dashboard"
import Products from "../pages/Admin/Products"
import Supplies from "../pages/Admin/Supplies"
import AdminRoot from "../pages/Admin/AdminRoot"

import Home from "../pages/Main/Home"
import AboutPage from "../pages/Main/AboutPage"
import Contact from "../pages/Main/Contact"
import MainRoot from "../pages/Main/MainRoot"



export const ROUTES = [
    {
        path: "/admin/",
        element: <AdminRoot />,
        children: [{
            path: "",
            element: <Home />
        },
        {
            path: "dashboard",
            element: <Dashboard />
        },
        {
            path: "products",
            element: <Products />
        },
        {
            path: "supplies",
            element: <Supplies />
        }]
    },
    {
        path: "/",
        element: <MainRoot />,
        children: [{
            path: "",
            element: <Home />
        },
        {
            path: "aboutpage",
            element: <AboutPage />
        },
        {
            path: "contact",
            element: <Contact />
        }
        ]
    }
]