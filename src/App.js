import logo from "./logo.svg";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/pages/About";
import Header from "./components/pages/Header";
import Contact from "./components/pages/Contact";
import CoffeeTable from "./components/pages/CoffeeTable";
import SofaSets from "./components/pages/SofaSets";
import ReclinerSofa from "./components/pages/ReclinerSofa";
import CornerSofa from "./components/pages/CornerSofa";
import SingleSeater from "./components/pages/SingleSeater";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
// import useJQueryInitializer from "./components/useJQueryInitializer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/index",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/coffee-table-and-side-table",
    element: <CoffeeTable />,
  },
  {
    path: "/sofa-sets",
    element: <SofaSets />,
  },
  {
    path: "/recliner-sofas",
    element: <ReclinerSofa />,
  },
  {
    path: "/corner-and-chaise-sofas",
    element: <CornerSofa />,
  },
  {
    path: "/single-seaters",
    element: <SingleSeater />,
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
