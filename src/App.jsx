import React, { lazy, Suspense, useEffect } from "react";
import nprogress from "nprogress";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import DefaultLayout from "./layouts/Default";
import { SyncOutlined } from "@ant-design/icons";
const PortfolioDetails = lazy(() => import("./pages/PortfolioDetails"));

const NotFound = () => (
  <div>
    <h1 className="text-xl">Page Not Found</h1>
  </div>
);

const LazyLoad = () => {
  nprogress.configure({
    easing: "ease-in-out",
    speed: 750,
    showSpinner: false,
  });

  useEffect(() => {
    nprogress.start();

    return () => {
      nprogress.done();
    };
  });

  return (
    <div className="w-full h-full flex flex-row justify-center items-center text-xxl">
      <SyncOutlined className="mr-6" spin /> loading...
    </div>
  );
};

const routerList = (listedRoutes) =>
  listedRoutes.map((route, i) => {
    const Component = route.component;
    return (
      <Route
        key={i}
        exact
        path={`/${route.path}`}
        element={<Component />}
      ></Route>
    );
  });

function App() {
  return (
    <Suspense fallback={<LazyLoad />}>
      <Router>
        <DefaultLayout>
          <Routes>
              {routerList(routes)}
              <Route path="/portfolio/:id" element={<PortfolioDetails />}></Route>
              <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </DefaultLayout>
      </Router>
    </Suspense>
  );
}

export default App;
