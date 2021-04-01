import React, { Suspense, lazy, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import AppBarHeader from "./components/UserMenu/AppBarHeader";
import Loader from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./redux/auth/authOperations";
import  PrivateRoute  from "./components/UserMenu/PrivateRoute";

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
          <Route path="/login" component={LoginPages} />
          <PrivateRoute path="/contacts" component={ContactsPages} redirectTo="/login"/>
  
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
