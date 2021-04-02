import React, { Suspense, lazy, useEffect } from "react";
import { Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./redux/auth/authOperations";
import { getIsAuthSelector } from "./redux/auth/authSelectors";
import { initialContacts } from "./redux/contacts/operations/contactsOperations";
import AppBarHeader from "./components/UserMenu/AppBarHeader";
import Loader from "./components/Loader/Loader";
import PrivateRoute from "./components/UserMenu/PrivateRoute";
import PublicRoute from "./components/UserMenu/PublicRoute";
import routes from "./routes";

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

  const isAuthenticated = useSelector(getIsAuthSelector);

  useEffect(() => {
    isAuthenticated && dispatch(initialContacts());
  }, [isAuthenticated]);

  return (
    <>
      <AppBarHeader />
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact path={routes.home} component={HomePage} />
          <PublicRoute
            path={routes.register}
            restricted
            redirectTo={routes.contacts}
            component={RegisterPages}
          />
          <PublicRoute
            path={routes.login}
            restricted
            redirectTo={routes.contacts}
            component={LoginPages}
          />
          <PrivateRoute
            path={routes.contacts}
            component={ContactsPages}
            redirectTo={routes.login}
          />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
