import React, { Fragment } from "react";
import { observer } from "mobx-react-lite";
import { action } from "mobx";
import classes from "./Header.module.css";
import { useStore } from "../../Stores/storeContext";
import { NavLink } from "react-router-dom";

const Header: React.FC = observer(() => {
  const STORE = useStore();

  function burgerToggleClickHandler() {
    STORE.Set_SideBar_Status();
  }

  const loginButtonInNavbar = <NavLink to="/Login" className={classes.nav_bar_ul_link} activeStyle={{ textDecoration: "underline" }}><li>Login</li></NavLink>;
  const isLoggedIn = STORE.IsLogin.valueOf();

  return (
    <Fragment>
      <header className={classes.header}>
        <nav className={classes.nav_bar}>
          <div className={classes.Burger_container}>
            <div className={classes.Burger_main_div} onClick={action(burgerToggleClickHandler)} >
              <div className={classes.Burger_div}></div>
              <div className={classes.Burger_div}></div>
              <div className={classes.Burger_div}></div>
            </div>
          </div>
          <div className={classes.div_ul_container}>
            <ul className={classes.nav_bar_ul}>
              <NavLink to="/Home" className={classes.nav_bar_ul_link} activeStyle={{ textDecoration: "underline" }}><li>Home</li></NavLink>
              {!isLoggedIn ? loginButtonInNavbar : null}
            </ul>
          </div>
          <div className={classes.div_img_container}>
            <img className={classes.logo_img} src="university_logo.png" alt="university_logo" />
          </div>
        </nav>
      </header>
    </Fragment>
  );
});

export default Header;
