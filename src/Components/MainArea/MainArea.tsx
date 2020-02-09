import React, { Fragment } from "react";
import LoginPage from "../LoginPage/LoginPage";
import classes from "./MainArea.module.css";
import { useStore } from "../../Stores/storeContext";
import { observer } from "mobx-react-lite";

const MainArea: React.FC = observer(() => {
  const STORE = useStore();
  const isLoggedIn = STORE.IsLogin.valueOf();

  const loginForm = (
    <div className={classes.Login_container}>
      <LoginPage />
    </div>
  );

  return (
    <Fragment>
        {!isLoggedIn ? loginForm : null}
    </Fragment>
  );
});
export default MainArea;
