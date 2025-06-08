import { Suspense, StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import About from "./pages/About";
// import CaseStudies from "./pages/CaseStudies";
// import TermsAndCondition from "./pages/TermsAndCondition";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import CaseStudy from "./pages/CaseStudy";
// import Error from "./pages/Error";
// import Services from "./pages/Services";
// import PaymentPolicy from "./pages/PaymentPolicy";
import ErrorBoundary from "./components/custom/ErrorBoundary";
import Layout from "./components/custom/Layout";
import Loading from "./pages/Loading";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
// import PrivPolicy from "./pages/PrivPolicy";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
// const Services = lazy(() => import("./pages/Services"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const TermsAndCondition = lazy(() => import("./pages/TermsAndCondition"));
const PrivPolicy = lazy(() => import("./pages/PrivPolicy"));
const PaymentPolicy = lazy(() => import("./pages/PaymentPolicy"));
const Error = lazy(() => import("./pages/Error"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        // { path: "services", element: <Services /> },
        { path: "*", element: <Error /> },
        { path: "error", element: <Error /> },
        {
          path: "case-studies",
          element: <CaseStudies />,
        },
        {
          path: "case-studies/:caseStudy",
          element: <CaseStudy />,
        },
        {
          path: "terms-and-condition",
          element: <TermsAndCondition />,
        },
        {
          path: "privacy-policy",
          element: <PrivPolicy />,
        },
        {
          path: "payment-policy",
          element: <PaymentPolicy />,
        },
        {
          path: "call",
          element: <Contact />,
        },
      ],
    },
  ]
  // {
  //   basename: "/clickbaitz-re",
  // }
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);
