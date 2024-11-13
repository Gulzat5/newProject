import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import App from "../App";
import { ContactPage } from "../pages/ContactPage";
import { ShopPage } from "../pages/ShopPage";
import { Pages } from "../pages/Pages";
import { Reservation } from "../pages/Reservation";
import { MenuPage } from "../pages/MenuPage";
import { AboutPage } from "../pages/AboutPage";
import { HomePage } from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "menu",
        element: <MenuPage />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "pages",
        element: <Pages />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);
