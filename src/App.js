import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./redux/auth/authOperations";
import AppBarHeader from "./components/UserMenu/AppBarHeader";
import Loader from "./components/Loader/Loader";
import PrivateRoute from "./components/UserMenu/PrivateRoute";
import PublicRoute from "./components/UserMenu/PublicRoute";

const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage" /* webpackChunkName: "home-page" */)
);
const ContactsPages = lazy(() =>
  import(
    "./pages/ContactsPages/ContactsPages" /* webpackChunkName: "contacts-page" */
  )
);
const LoginPages = lazy(() =>
  import("./pages/LoginPages/LoginPages" /* webpackChunkName: "login-page" */)
);

const RegisterPages = lazy(() =>
  import(
    "./pages/RegisterPages/RegisterPages" /* webpackChunkName: "register-page" */
  )
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <>
      <AppBarHeader />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/register" component={RegisterPages} />
          <PublicRoute path="/login" restricted component={LoginPages} />
          <PrivateRoute
            path="/contacts"
            component={ContactsPages}
            redirectTo="/login"
          />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
