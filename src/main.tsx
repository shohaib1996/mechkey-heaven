import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.tsx";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </Provider>
  </React.StrictMode>
);
