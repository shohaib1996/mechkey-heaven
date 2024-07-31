import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layout/MainLayout";
import AllProducts from "../pages/allProucts/AllProducts";
import AboutUs from "../pages/home/aboutUs/AboutUs";
import ProductDetails from "../pages/productDetails/ProductDetails";
import ContactUs from "../pages/contactUs/ContactUs";
import Dashboard from "../pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <AllProducts />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/api/v1/product/${params.id}`);
        },
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
