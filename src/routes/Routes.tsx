import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layout/MainLayout";
import AllProducts from "../pages/allProucts/AllProducts";
import AboutUs from "../pages/home/aboutUs/AboutUs";
import ProductDetails from "../pages/productDetails/ProductDetails";
import ContactUs from "../pages/contactUs/ContactUs";

const fetchProductById = async ({ params }) => {
  const response = await fetch("/data.json");
  const products = await response.json();
  const product = products.find(
    (product) => product.id === parseInt(params.id)
  );
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

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
        loader: fetchProductById,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);
