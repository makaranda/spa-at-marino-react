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
// import useJQueryInitializer from "./components/useJQueryInitializer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "treatments",
    element: <Home />,
    children: [
      {
        path: "full-body-massage",
        element: <Home />,
      },
      {
        path: "short-treatments",
        element: <Home />,
      },
      {
        path: "scrubs-and-wraps",
        element: <Home />,
      },
      {
        path: "hair-and-facials",
        element: <Home />,
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
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <Router>
        <div>
          <Routes>
            <Route path="/" element={<PageWrapper component={<Home />} />} />
            <Route
              path="/about"
              element={<PageWrapper component={<About />} />}
            />
            <Route
              path="/contact"
              element={<PageWrapper component={<Contact />} />}
            />
          </Routes>
        </div>
      </Router> */}
    </div>
  );
}

// const PageWrapper = ({ component }) => {
//   useJQueryInitializer();
//   return component;
// };

export default App;
