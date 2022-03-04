import React, { Suspense, useEffect } from "react";
import nprogress from "nprogress";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import DefaultLayout from "./layouts/Default";

// const ErrorPage = () => <div>error page</div>;

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

  return <>loading...</>;
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
          <Routes>{routerList(routes)}</Routes>
        </DefaultLayout>
      </Router>
    </Suspense>
  );
}

export default App;
