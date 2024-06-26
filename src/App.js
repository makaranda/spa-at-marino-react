import logo from "./logo.svg";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/pages/About";
import Header from "./components/pages/Header";
import Contact from "./components/pages/Contact";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import Fullbodymessage from "./components/pages/Fullbodymessage";
import Shorttreatments from "./components/pages/Shorttreatments";
import Scrubsandwraps from "./components/pages/Scrubsandwraps";
import HairandFacials from "./components/pages/HairandFacials";
// import useJQueryInitializer from "./components/useJQueryInitializer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "treatments",
    children: [
      {
        path: "full-body-massage",
        element: <Fullbodymessage />,
      },
      {
        path: "short-treatments",
        element: <Shorttreatments />,
      },
      {
        path: "scrubs-and-wraps",
        element: <Scrubsandwraps />,
      },
      {
        path: "hair-and-facials",
        element: <HairandFacials />,
      },
      {
        path: "special-treatments",
        element: <Home />,
      },
      {
        path: "our-spa-package",
        element: <Home />,
      },
    ],
  },
  {
    path: "/products",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

// const PageWrapper = ({ component }) => {
//   useJQueryInitializer();
//   return component;
// };

export default App;
