import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppBarHeader from "./components/UserMenu/AppBarHeader";
import Loader from "./components/Loader/Loader";

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

  // const token = useSelector((state) => state.token);
  // const history = useHistory();
  // useEffect(() => {
  //   if (token) {
  //     history.push(navigation.home);
  //   } else {
  //     history.push(navigation.login);
  //   }
  // }, [token]);

  return (
    <>
      <AppBarHeader />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/contacts" component={ContactsPages} />
          <Route path="/register" component={RegisterPages} />
          <Route path="/login" component={LoginPages} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
