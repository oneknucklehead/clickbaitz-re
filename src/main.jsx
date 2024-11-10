import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import TermsAndCondition from "./pages/TermsAndCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CaseStudy from "./pages/CaseStudy";
import Error from "./pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/case-studies",
    element: <CaseStudies />,
  },
  {
    path: "/case-studies/:caseStudy",
    element: <CaseStudy />,
  },
  {
    path: "/terms-and-condition",
    element: <TermsAndCondition />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },

  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/error",
    element: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
