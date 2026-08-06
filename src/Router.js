import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home.jsx";
import RootLayout from "./RootLayout";
import Shop from "./Components/Shop.jsx";


 export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "Shop", Component: Shop },
      
    ],
  },
]);