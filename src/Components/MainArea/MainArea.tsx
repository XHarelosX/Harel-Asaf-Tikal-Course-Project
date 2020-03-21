import React, { Fragment } from "react";
import LoginPage from "../LoginPage/LoginPage";
import { useStore } from "../../Stores/storeContext";
import { observer } from "mobx-react-lite";
import { Route, Redirect } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

const MainArea: React.FC = observer(() => {
  const STORE = useStore();
  const isLoggedIn = STORE.IsLogin.valueOf();

  const loginForm = (
    <Fragment>
      <Route path="/" exact >
        <Redirect to="/Home" />
      </Route>
      <Route path="/Login" exact component={LoginPage} />
      <Route path="/Home" exact component={HomePage} />

    </Fragment>
  );

  return (
    <Fragment>
      {!isLoggedIn ? loginForm : null}
    </Fragment>
  );
});
export default MainArea;
